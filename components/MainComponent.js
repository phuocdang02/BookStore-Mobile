import React, { Component } from "react";
import Shelf from "./ShelfComponent";
import { BOOKS } from "../shared/books";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: BOOKS
        };
    }
    render() {
        return(
            <Shelf books = {this.state.books}/>
        );
    }
}
export default Main;
