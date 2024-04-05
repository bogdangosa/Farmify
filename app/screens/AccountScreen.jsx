import React, { useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import SimpleButton from '../components/Buttons/SimpleButton';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useUserContext } from '../contexts/UserContext';
import InputField from '../components/FormElements/InputField';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';

const AccountScreen = () => {
    const [Name,setName] = useState('');
    const user = useUserContext();

    const SignOut = ()=>{
        console.log("Signing out");
        FIREBASE_AUTH.signOut();
      }

    return (
        <View style={styles.container}>
            <BecomeAFarmerCard></BecomeAFarmerCard> 

            <InputField
                label={"Name"}
                style={styles.input}
                placeholder="Your name"
                onChangeText={setName}
                value={Name}></InputField>
            <SimpleButton style={styles.sign_out_button} onPress={()=>SignOut()} title="Sign out"></SimpleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 16,
    },
    sign_out_button: {
        marginTop: 16,
        width:'fit-content'
    },
});

export default AccountScreen;