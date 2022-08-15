import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-virtualized-view";
import { BOOKS } from "../shared/books";

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
    };
  }
  render() {
    return (
      <FlatList
        data={this.state.books}
        renderItem={({ item, index }) => this.renderShelfItem(item, index)}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
  renderShelfItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem
          key={index}
          onPress={() => navigate("Bookdetail", { bookId: item.id })}
        >
          <Avatar source={require("./images/beloved.jpg")} />
          <ListItem.Content>
            <ListItem.Title> {item.title} </ListItem.Title>
            <ListItem.Subtitle> {item.author} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    );
  }
}
export default Shelf;
