import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import SimpleButton from '../components/Buttons/SimpleButton';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useUserContext, useUserUpdateContext } from '../contexts/UserContext';
import InputField from '../components/FormElements/InputField';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import BecomeFarmerModal from '../Modals/BecomeFarmerModal';
import SubscribedCardSimple from "../components/Cards/SubcriptionCard";
import SquaredButton from '../components/Buttons/SquaredButton';
const AccountScreen = () => {
    const [Name,setName] = useState('');
    const [FarmName,setFarmName] = useState('');
    const [FarmDescription,setFarmDescription] = useState('');
    const [BecomeAFarmerModalState,setBecomeAFarmerModalState] = useState(false);
    const user = useUserContext();
    const userUpdate = useUserUpdateContext();

    useEffect(() => {
        if(user!=undefined){
            setName(user.name);
        }
    }, [user]);

    const SignOut = ()=>{
        console.log("Signing out");
        FIREBASE_AUTH.signOut();
      }

      const cancelSubscription = () => {
        userUpdate({"command":"cancel_subscription",});
    }

    return (
        <View style={styles.container}>
            {!user.is_farmer?<BecomeAFarmerCard onPress={()=>setBecomeAFarmerModalState(true)}></BecomeAFarmerCard>:<></>}
            <InputField
                label={"Nume"}
                style={styles.input}
                placeholder="Numele tau"
                onChangeText={setName}
                value={Name}></InputField>
            <SimpleButton style={styles.sign_out_button} onPress={()=>SignOut()} title="Sign out"></SimpleButton>
            {user.subscription_type!="none"?
            <View>
                <Text style={styles.subscription_type_text}>Subscription type: {user.subscription_type}</Text>
                <SquaredButton style={styles.sign_out_button} onPress={()=>cancelSubscription()} title="Cancel subscription"></SquaredButton>
            </View>:<></>}
            <BecomeFarmerModal isVisible={BecomeAFarmerModalState}onClose={()=>setBecomeAFarmerModalState(false)}></BecomeFarmerModal>
     
        </View>
    );
};

const styles = StyleSheet.create({
    subscription_type_text: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
        marginTop: 16,
    },
    inline_container: {
        gap: 8,
    },
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