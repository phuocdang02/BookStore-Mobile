import React, { Component } from "react";
import { View, Text, Alert, Button, TouchableOpacity } from "react-native";
import { Card, Divider, Input, CheckBox, Icon } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinGG: "Sign In with Google",
      signinFB: "Sign In with Facebook",
      username: "",
      password: "",
      remember: false,
    };
  }
  render() {
    return (
      <View
        style={{ backgroundColor: "#505160", width: "100%", height: "100%" }}
      >
        <View style={{ justifyContent: "center", margin: 20, marginTop: 50 }}>
          <Text
            style={{
              marginTop: 50,
              marginBottom: 50,
              textAlign: "center",
              fontSize: 25,
              color: "#FFCDD2",
              fontWeight: "bold",
            }}
          >
            WELCOME BACK,
          </Text>
          <Card.Divider />
          <Input
            placeholder="Username"
            placeholderTextColor={"#FFCDD2"}
            leftIcon={{
              name: "user-o",
              type: "font-awesome",
              color: "#FFCDD2",
            }}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <Input
            placeholder="Password"
            placeholderTextColor={"#FFCDD2"}
            leftIcon={{ name: "lock", type: "font-awesome", color: "#FFCDD2" }}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              containerStyle={{ backgroundColor: null }}
              checkedColor={"#FFCDD2"}
              right
              checked={this.state.remember}
              onPress={() => this.setState({ remember: !this.state.remember })}
            />
            <Text style={{ color: "#FFCDD2" }}>Remember me</Text>
          </View>
          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={{
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF",
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: "#FFCDD2",
              }}
              onPress={() => this.handleLogin()}
            >
              <Text style={{ fontSize: 20, color: "#FFCDD2" }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Card.Divider />
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFCDD2",
                borderRadius: 10,
                borderWidth: 5,
                borderColor: "transparent",
                flexDirection: "row",
                justifyContent: "center",
              }}
              onPress={() => Alert.alert("This is for Login with Facebook")}
            >
              <Icon
                type="font-awesome"
                name="facebook"
                color={"#FFF"}
                style={{ paddingRight: 10 }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 20, color: "#fff" }}
              >
                {this.state.signinFB}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFCDD2",
                borderRadius: 10,
                borderWidth: 5,
                borderColor: "transparent",
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "center",
              }}
              onPress={() => Alert.alert("This is for Login with Google")}
            >
              <Icon
                type="font-awesome"
                name="google"
                color={"#FFF"}
                style={{ paddingRight: 10 }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 20, color: "#fff" }}
              >
                {this.state.signinGG}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  componentDidMount() {
    SecureStore.getItemAsync("userinfo").then((data) => {
      const userinfo = JSON.parse(data);
      if (userinfo && userinfo.remember === true) {
        this.setState({
          username: userinfo.username,
          password: userinfo.password,
          remember: userinfo.remember,
        });
      }
    });
  }
  handleLogin() {
    if (this.state.remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          remember: this.state.remember,
        })
      ).catch((error) => alert("Could not save user info", error));
      alert("Remembered user!");
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        alert("Could not delete user info", error)
      );
      alert("Forgotten user!");
    }
  }
}
export default Login;
