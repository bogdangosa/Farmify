import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./app/screens/AccountScreen";
import HomeStack from "./app/screens/HomeStack";
import FarmManagerStack from "./app/screens/FarmManagerStack";
import { useUserContext } from "./app/contexts/UserContext";
import OrdersScreen from "./app/screens/OrdersScreen";

function LoggedInStack() {
  const Drawer = createDrawerNavigator();
  const user = useUserContext();
  const is_farmer = false;

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
      {user?.is_farmer?<Drawer.Screen name="Manager" component={FarmManagerStack}></Drawer.Screen>:<></>}
      <Drawer.Screen name="Account" component={AccountScreen}></Drawer.Screen>
        <Drawer.Screen name="My Orders" component={OrdersScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default LoggedInStack;