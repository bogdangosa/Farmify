import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import SimpleButton from '../components/Buttons/SimpleButton';
import { FIREBASE_AUTH, FIREBASE_STORRAGE } from '../../firebaseConfig';
import { useUserContext, useUserUpdateContext } from '../contexts/UserContext';
import InputField from '../components/FormElements/InputField';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import BecomeFarmerModal from '../Modals/BecomeFarmerModal';
import SubscribedCardSimple from "../components/Cards/SubcriptionCard";
import SquaredButton from '../components/Buttons/SquaredButton';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


const AccountScreen = () => {
    const [Name,setName] = useState('');
    const [FarmName,setFarmName] = useState('');
    const [FarmDescription,setFarmDescription] = useState('');
    const [BecomeAFarmerModalState,setBecomeAFarmerModalState] = useState(false);
    const [FarmImage,setFarmImage] = useState(undefined);
    const user = useUserContext();
    const userUpdate = useUserUpdateContext();

    useEffect(() => {
        if(user!=undefined){
            setName(user.name);
        }
    }, [user]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if(!result.canceled){
            setFarmImage(result.assets[0].uri);
            await uploadImage(result.assets[0].uri,"image");
        }


        console.log(result);

    }

    const uploadImage = async (uri,image_type)=>{
        const response = await fetch(uri);
        const blob = await response.blob();
        const storrageRef = ref(FIREBASE_STORRAGE,"FarmImages/"+ new Date().getTime());
        const uploadTask = uploadBytesResumable(storrageRef,blob)
        uploadTask.on("state_changed",(snapshot)=>{
            console.log(snapshot.bytesTransferred/snapshot.totalBytes);
        },(error)=>console.log(error),()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async (download_url)=>{
                console.log(download_url);
            })
        })
         
    }

    const SignOut = ()=>{
        console.log("Signing out");
        FIREBASE_AUTH.signOut();
      }

      const cancelSubscription = () => {
        userUpdate({"command":"cancel_subscription",});
    }

    return (
        <View style={styles.container}>
            {!user.is_farmer?<BecomeAFarmerCard onPress={()=>setBecomeAFarmerModalState(true)}></BecomeAFarmerCard>:
            <>
                <InputField
                    label={"Numele fermei"}
                    style={styles.input}
                    placeholder="Numele fermei tale"
                    onChangeText={setFarmName}
                    value={FarmName}></InputField>    
                <InputField 
                    label="Descrierea fermei" 
                    placeholder="Descrierea fermei tale" 
                    value={FarmDescription}
                    multiline={true}
                    styles={{ height:200, textAlignVertical: 'top',}}
                    onChangeText={setFarmDescription}></InputField>        
                    <SquaredButton style={styles.add_image_button} title="Schimba imaginea" onPress={()=>pickImage()}></SquaredButton>
                    {/*<SquaredButton style={styles.add_image_button} title="Salveaza" onPress={()=>uploadImage()}></SquaredButton>*/}
            </>}
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
        gap: 16,
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