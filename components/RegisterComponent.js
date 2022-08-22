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
  render() {
    return (
      <ScrollView>
        <View style={{ justifyContent: "center", margin: 20 }}>
          <View style={{ flex: 1, flexDirection: "row", margin: 50 }}>
            <Image
              style={{ margin: 10, width: 80, height: 60 }}
              source={{ uri: this.state.imageUrl }}
            />
            <View style={{ justifyContent: "center" }}>
              <Button
                title="choose..."
                onPress={() => this.getImageFromCamera()}
                color="#ec407a"
              />
            </View>
          </View>
          <Input
            placeholder="Username"
            leftIcon={{
              type: "font-awesome",
              name: "user-o",
              color: "#ec407a",
            }}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <Input
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "lock", color: "#ec407a" }}
            textContentType="password"
            secureTextEntry="true"
            keyboardType="numeric"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={{ marginTop: 20 }}>
            <Button
              title="Register"
              color="#ec407a"
              onPress={() => this.handleRegister()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
  async getImageFromCamera() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      const capturedImage = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!capturedImage.cancelled) {
        this.setState({ imageUrl: capturedImage.uri });
      }
    }
  }
  handleRegister() {
    alert("Coming soon!");
  }
}
export default Register;
