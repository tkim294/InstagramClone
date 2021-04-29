import React from "react";
import { Image } from "react-native";
import {
  Foundation,
  Feather,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import logo from "../assets/images/logo.png";

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => <Feather name="camera" size={25} color={"#000"} />,
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 130, height: 50 }}
            />
          ),
          headerRight: () => (
            <SimpleLineIcons name="paper-plane" size={25} color={"#545454"} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
