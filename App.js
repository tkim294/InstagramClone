import { StatusBar } from "expo-status-bar";
import React from "react";

import { withAuthenticator } from "aws-amplify-react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./src/router";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
