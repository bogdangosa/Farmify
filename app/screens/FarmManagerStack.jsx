import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import FarmerScreen from "./FarmerScreen";
import FarmManagerHome from "./FarmManagerHome";
import OrdersScreen from "./OrdersScreen";



const Stack = createNativeStackNavigator();

function FarmManagerStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Manager"
            component={FarmManagerHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Orders" component={OrdersScreen} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
  }

export default FarmManagerStack;