import React from 'react';
import {  useUserContext } from './app/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthentificationStack from './AuthentificationStack';
import LoggedInStack from './LoggedInStack';

const AppLayout = () => {
    const user = "smth";

    return (
        <NavigationContainer>
            {user!=undefined? 
            <LoggedInStack />:<AuthentificationStack />}
        </NavigationContainer>
    );
};

export default AppLayout;