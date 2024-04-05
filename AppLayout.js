import React from 'react';
import {  useUserContext } from './app/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthentificationStack from './AuthentificationStack';
import LoggedInStack from './LoggedInStack';
import { useFonts } from 'expo-font';
import { Nunito_300Light,Nunito_400Regular ,Nunito_700Bold} from '@expo-google-fonts/nunito';

const AppLayout = () => {
    const [FontsLoaded,FontsError] = useFonts({
        Nunito_300Light,
        Nunito_400Regular,
        Nunito_700Bold,
    });
    const user = useUserContext();

    if (!FontsLoaded && !FontsError) {
        return null;
      }

    return (
        <NavigationContainer>
            {user!=undefined? 
            <LoggedInStack />:<AuthentificationStack />}
        </NavigationContainer>
    );
};

export default AppLayout;