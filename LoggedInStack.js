import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./app/screens/AccountScreen";
import HomeScreen from "./app/screens/HomeScreen";

function LoggedInStack() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerStyle={styles.custom_drawer} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name="Account" component={AccountScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default LoggedInStack;