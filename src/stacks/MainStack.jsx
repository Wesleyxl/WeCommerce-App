import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Preload from "../pages/auth/Preload";
import Sign from "../pages/auth/Sign";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import MainTabs from "./MainTabs";

function MainStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Sign" component={Sign} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}

export default MainStack;
