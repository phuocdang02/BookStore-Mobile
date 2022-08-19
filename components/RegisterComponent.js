import React, { Component } from "react";
import { ScrollView, View, Button, Image } from "react-native";
import { Input } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { baseUrl } from "../shared/baseUrl";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: baseUrl + "images/logo.png",
      username: "",
      password: "",
    };
  }
}
