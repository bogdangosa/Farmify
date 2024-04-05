import React from 'react';
import {  useUserContext } from './app/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import LoggedInStack from './LoggedInStack';

const AppLayout = () => {
    const user = useUserContext();

    return (
        <NavigationContainer>
            {user!=undefined? 
            <LoggedInStack />:<AuthStack />}
        </NavigationContainer>
    );
};

export default AppLayout;