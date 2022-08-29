import React, { Component } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

class Landing extends Component {
  render() {
    const styles = StyleSheet.create({
      image: {
        width: "100%",
        height: "100%",
        flexGrow: 1,
        justifyContent: "center",
      },
      text: {
        marginTop: 50,
        textAlign: "center",
        backgroundColor: "transparent",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
      },
      button: {
        width: "50%",
        marginTop: 10,
        marginLeft: "25%",
        backgroundColor: "#ec407a",
        borderRadius: 10,
        borderWidth: 5,
        borderColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
      },
    });
    return (
      <View style={{ backgroundColor: "transparent" }}>
        <ImageBackground
          source={require("../shared/landing-page-bg.jpg")}
          style={styles.image}
        >
          <Text style={styles.text}>WELCOME TO PASTEL</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Go to Login Site")}
          >
            <Text>I already have Account...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Go to Register Site")}
          >
            <Text>Register...</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
export default Landing;
