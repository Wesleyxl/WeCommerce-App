import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import UserContexts from "./contexts/userContexts";
import MainStack from "./stacks/MainStack";

export default function App() {
  return (
    <UserContexts>
      <NavigationContainer>
        <StatusBar style="dark" />
        <MainStack />
      </NavigationContainer>
    </UserContexts>
  );
}
