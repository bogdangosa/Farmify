import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./app/screens/AccountScreen";
import HomeScreen from "./app/screens/HomeScreen";
import FarmerScreen from "./app/screens/FarmerScreen";
import HomeStack from "./app/screens/HomeStack";
import FarmManagerHome from "./app/screens/FarmManagerHome";

function LoggedInStack() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
      <Drawer.Screen name="Manager" component={FarmManagerHome}></Drawer.Screen>
      <Drawer.Screen name="Account" component={AccountScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default LoggedInStack;