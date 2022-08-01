import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

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
        <FontAwesomeIcon icon={brands('fa-facebook')} />
        <Text>{this.state.signinGG}</Text>
        <Text>{this.state.signinFB}</Text>
      </View>
    );
  }
}
export default Login;
