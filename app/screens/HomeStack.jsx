import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import FarmerScreen from "./FarmerScreen";



const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Farmer" component={FarmerScreen} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
  }

export default HomeStack;