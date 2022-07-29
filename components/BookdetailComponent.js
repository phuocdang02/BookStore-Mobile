import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Image } from "react-native-elements";

/* Declare from shared folder */
import { BOOKS } from "../shared/books";

class RenderBook extends Component {
  render() {
    const book = this.props.book;
    if (book != null) {
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
            <Card.FeaturedTitle style={{ color: "#FFF" }}>
              {book.title}
            </Card.FeaturedTitle>
          </Image>
          <Text style={{ margin: 10 }}>{book.author}</Text>
        </Card>
      );
    }
    return <View />;
  }
}

class Bookdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
    };
  }
  render() {
    const bookId = parseInt(this.props.route.params.bookId);
    const book = this.state.books[bookId];
    return <RenderBook book={book} />;
  }
}
export default Bookdetail;
