import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import SimpleButton from '../components/Buttons/SimpleButton';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useUserContext } from '../contexts/UserContext';
import InputField from '../components/FormElements/InputField';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import BecomeFarmerModal from '../Modals/BecomeFarmerModal';

const MapScreen = () => {
    const [Name,setName] = useState('');
    const [BecomeAFarmerModalState,setBecomeAFarmerModalState] = useState(false);
    const user = useUserContext();

    useEffect(() => {
        if(user!=undefined){
            setName(user.name);
        }
    }, [user]);

    const SignOut = ()=>{
        console.log("Signing out");
        FIREBASE_AUTH.signOut();
    }

    return (
        <View style={styles.container}>

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

export default MapScreen;