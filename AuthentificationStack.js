import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";


const Stack = createNativeStackNavigator();

function AuthentificationStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
  }

export default AuthentificationStack;