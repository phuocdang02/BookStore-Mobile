import React, { Component } from "react";
import Main from "./components/MainComponent";
import Demo from "./components/DemoComponent";

// firebase
/* import { initializeApp } from 'firebase/app';
const firebaseConfig = { databaseURL: 'https://pastel-bookshop-default-rtdb.asia-southeast1.firebasedatabase.app/' };
initializeApp(firebaseConfig); */

class App extends Component {
  render() {
    return (
      //<Main />
      <Demo />
    );
  }
}
export default App;
