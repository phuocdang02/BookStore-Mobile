import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

class Shelf extends Component {
    render() {
        return (
            <FlatList
                data={this.props.books}
                renderItem={({ item, index }) => this.renderShelfItem(item, index)}
                keyExtractor={(item) => item.id.toString()} />
        );
    }

    renderShelfItem(item, index) {
        return (
            <ListItem key={index}>
                <Avatar source={require('./images/beloved.jpg')} />
                <ListItem.Content>
                    <ListItem.Title> {item.title} </ListItem.Title>
                    <ListItem.Subtitle> {item.author} </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
}
export default Shelf;
