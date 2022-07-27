import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Image } from "react-native-elements";

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
          />
          <Card.FeaturedTitle>{book.name}</Card.FeaturedTitle>
          <Text style={{ margin: 10 }}>{book.description}</Text>
        </Card>
      );
    }
    return (<View/>);
  }
}

class Bookdetail extends Component{
    render(){
        return(
            <RenderBook book = {this.props.book}/>
        );
    }
}
export default Bookdetail;