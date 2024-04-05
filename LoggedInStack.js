import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./app/screens/AccountScreen";
import HomeScreen from "./app/screens/HomeScreen";
import FarmerScreen from "./app/screens/FarmerScreen";

function LoggedInStack() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name="Account" component={AccountScreen}></Drawer.Screen>
      <Drawer.Screen name="Farmer" component={FarmerScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default LoggedInStack;