import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Card, Image } from "react-native-elements";
import { BOOKS } from "../shared/books";

class RenderItem extends Component {
  render() {
    const item = this.props.item;
    if (item != null) {
      return (
        <Card>
          <Image
            source={require("./images/beloved.jpg")}
            style={{
              width: "100%",
              height: 100,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.FeaturedTitle>{item.title}</Card.FeaturedTitle>
            <Card.FeaturedSubtitle>{item.author}</Card.FeaturedSubtitle>
          </Image>
          <Text style={{ margin: 10 }}>{item.description}</Text>
        </Card>
      );
    }
    return (<View/>);
  }
}

class Home extends Component {
  constructor (props){
    super(props);
    this.state = {
      books:BOOKS,
    }
  }
  render() {
    const book = this.state.books.filter((book) => book.featured === true)[0];
    return(
      <ScrollView>
        <RenderItem item={book}/>
      </ScrollView>
    );
  }
}
export default Home;
