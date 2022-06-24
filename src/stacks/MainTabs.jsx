import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import CustomTabBar from "../components/CustomTabBar";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Order from "../pages/Order";
import UserProfile from "../pages/Profile";
import Wallet from "../pages/Wallet";

function MainTabs() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="Home"
    >
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Order"
        component={Order}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={Cart}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Wallet"
        component={Wallet}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="UserProfile"
        component={UserProfile}
      />
    </Tabs.Navigator>
  );
}

export default MainTabs;
