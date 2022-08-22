import React, { Component } from "react";
import { View, Text, Linking } from "react-native";
import { Icon, Image } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

/* Declare Components */
import Landing from "./LandingComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";
import Shelf from "./ShelfComponent";
import Bookdetail from "./BookdetailComponent";

/* LANDING SCREEN */
function LandingNavigatorScreen() {
  const LandingNavigator = createStackNavigator();
  return (
    <LandingNavigator.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#FFCDD2" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <LandingNavigator.Screen
        name="Landing"
        component={Landing}
        options={({ navigation }) => ({
          headerTitle: "Landing",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </LandingNavigator.Navigator>
  );
}
/* TAB NAVIGATOR */
function TabNavigatorScreen() {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator initialRouteName="Login">
      <TabNavigator.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="sign-in"
              type="font-awesome"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: "#ec407a",
        }}
      />
      <TabNavigator.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="user-plus"
              type="font-awesome"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: "#ec407a",
        }}
      />
    </TabNavigator.Navigator>
  );
}
/* LOGIN SCREEN */
function LoginNavigatorScreen() {
  const LoginNavigator = createStackNavigator();
  return (
    <LoginNavigator.Navigator
      initialRouteName="LoginRegister"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#FFCDD2" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <LoginNavigator.Screen
        name="LoginRegister"
        component={TabNavigatorScreen}
        options={({ navigation }) => ({
          headerTitle: "Login",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </LoginNavigator.Navigator>
  );
}
/* HOME SCREEN */
function HomeNavigatorScreen() {
  const HomeNavigator = createStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#FFCDD2" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <HomeNavigator.Screen name="Home" component={Home} />
    </HomeNavigator.Navigator>
  );
}
/* SHELF SCREEN */
function ShelfNavigatorScreen() {
  const ShelfNavigator = createStackNavigator();
  return (
    <ShelfNavigator.Navigator
      initialRouteName="Shelf"
      screenOptions={{
        headerStyle: { backgroundColor: "#FFCDD2" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <ShelfNavigator.Screen name="Shelf" component={Shelf} />
      <ShelfNavigator.Screen
        name="Bookdetail"
        component={Bookdetail}
        options={{ headerTitle: "Book Detail" }}
      />
    </ShelfNavigator.Navigator>
  );
}
/* CONTACT SCREEN */
function ContactNavigatorScreen() {
  const ContactNavigator = createStackNavigator();
  return (
    <ContactNavigator.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerStyle: { backgroundColor: "#7cc" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <ContactNavigator.Screen
        name="Contact"
        component={Contact}
        options={({ navigation }) => ({
          headerTitle: "About",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </ContactNavigator.Navigator>
  );
}
/* ABOUT SCREEN */
function AboutNavigatorScreen() {
  const AboutNavigator = createStackNavigator();
  return (
    <AboutNavigator.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: { backgroundColor: "#7cc" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <AboutNavigator.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: "About",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </AboutNavigator.Navigator>
  );
}

/* CUSTOM DRAWER */
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* LOGO and custom drawer */}
      <View
        style={{
          backgroundColor: "#ec407a",
          height: 80,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require("../shared/logo.jpg")}
            style={{ margin: 5, width: 80, height: 60, borderRadius: 50 }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
            Pastel Bookshop
          </Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        icon={({ focused, size }) => (
          <Icon name="help" size={size} color={focused ? "#FFCDD2" : "#ccc"} />
        )}
        onPress={() => Linking.openURL("https://facebook.com/ha.phuocdang")}
      />
    </DrawerContentScrollView>
  );
}

/* MAIN SCREEN with Drawer Navigator */
function MainNavigatorScreen() {
  const MainNavigator = createDrawerNavigator();
  return (
    <MainNavigator.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{
        headerStyle: { backgourndColor: "#FFCDD2" },
        drawerStyle: { backgroundColor: "#fff" },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <MainNavigator.Screen
        name="LandingScreen"
        component={LandingNavigatorScreen}
        options={{
          title: "Landing",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="apple"
              type="font-awesome"
              size={size}
              color={focused ? "#FFCDD2" : "#ccc"}
            />
          ),
          drawerActiveTintColor: "#FFCDD2",
        }}
      />
      <MainNavigator.Screen
        name="LoginScreen"
        component={LoginNavigatorScreen}
        options={{
          title: "Login",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="sign-in"
              type="font-awesome"
              size={size}
              color={focused ? "#FFCDD2" : "#ccc"}
            />
          ),
          drawerActiveTintColor: "#FFCDD2",
        }}
      />
      <MainNavigator.Screen
        name="HomeScreen"
        component={HomeNavigatorScreen}
        options={{
          title: "Home",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={focused ? "#FFCDD2" : "#ccc"}
            />
          ),
          drawerActiveTintColor: "#FFCDD2",
        }}
      />
      <MainNavigator.Screen
        name="ShelfScreen"
        component={ShelfNavigatorScreen}
        options={{
          title: "Shelf",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="book"
              size={size}
              color={focused ? "#FFCDD2" : "#ccc"}
            />
          ),
          drawerActiveTintColor: "#FFCDD2",
        }}
      />
      <MainNavigator.Screen
        name="AboutScreen"
        component={AboutNavigatorScreen}
        options={{
          title: "About Us",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon name="info" size={size} color={focused ? "#7cc" : "#ccc"} />
          ),
          drawerActiveTintColor: "#7cc",
        }}
      />
      <MainNavigator.Screen
        name="ContactScreen"
        component={ContactNavigatorScreen}
        options={{
          title: "Contact Us",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="contacts"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
          drawerActiveTintColor: "#7cc",
        }}
      />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}
export default Main;
