import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Home from "../pages/Home";

function MainTabs() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Tabs.Navigator>
  );
}

export default MainTabs;
