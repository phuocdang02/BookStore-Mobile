import React, { Component } from "react";
import { FlatList, Text, View, TouchableOpacity, Alert } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { SwipeListView } from "react-native-swipe-list-view";
import * as Animatable from "react-native-animatable";

// redux
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    books: state.books,
    favorites: state.favorites,
  };
};
import { deleteFavorite } from "../redux/ActionCreators";
const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (bookId) => dispatch(deleteFavorite(bookId)),
});

class Favorites extends Component {
  render() {
    if (this.props.books.isLoading) {
      return <Loading />;
    } else if (this.props.books.errMess) {
      return <Text>{this.props.books.errMess}</Text>;
    } else {
      const books = this.props.books.books.filter((book) =>
        this.props.favorites.some((el) => el === book.id)
      );
      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <SwipeListView
            data={books}
            renderItem={({ item, index }) => this.renderMenuItem(item, index)}
            renderHiddenItem={({ item, index }) =>
              this.renderHiddenItem(item, index)
            }
            keyExtractor={(item) => item.id.toString()}
            rightOpenValue={-100}
          />
        </Animatable.View>
      );
    }
  }
  renderMenuItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem
        key={index}
        onPress={() => navigate("Bookdetail", { bookId: item.id })}
      >
        <Avatar source={{ uri: baseUrl + item.imageLink }} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }
  renderHiddenItem(item, index) {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#DDD",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 15,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 100,
            backgroundColor: "red",
          }}
          onPress={() => {
            Alert.alert(
              "Delete Favorite?",
              "Are you sure you wish to delete this favorite book: " +
                item.name +
                "?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    /* nothing */
                  },
                },
                {
                  text: "OK",
                  onPress: () => this.props.deleteFavorite(item.id),
                },
              ]
            );
          }}
        >
          <Text style={{ color: "#FFF" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
