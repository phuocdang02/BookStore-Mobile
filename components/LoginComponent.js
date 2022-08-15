import React, { Component } from "react";
import { View, Text } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinGG: "Sign In with Google",
      signinFB: "Sign In with Facebook",
    };
  }
  render() {
    return (
      <View>
        <Text style={{ margin: 50 }}>Welcome back,</Text>
        <Text>{this.state.signinGG}</Text>
        <Text>{this.state.signinFB}</Text>
      </View>
    );
  }
}
export default Login;
