import React from 'react';
import { View, Text } from 'react-native';
import SimpleButton from '../components/Buttons/SimpleButton';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const AccountScreen = () => {

    const SignOut = ()=>{
        console.log("Signing out");
        FIREBASE_AUTH.signOut();
      }

    return (
        <View>
            <Text>Account Screen</Text>
            <SimpleButton onPress={()=>SignOut()} title="Sign out"></SimpleButton>
        </View>
    );
};

export default AccountScreen;