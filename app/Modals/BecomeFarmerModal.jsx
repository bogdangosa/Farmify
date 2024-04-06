import React, { useEffect , useState} from 'react';
import { Modal, View, Text ,StyleSheet} from 'react-native';
import SquaredButton from '../components/Buttons/SquaredButton';
import InputField from '../components/FormElements/InputField';
import { COLORS } from '../constants/colors';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import { useUserContext, useUserUpdateContext } from '../contexts/UserContext';
import axios from 'axios';
import useUser from '../hooks/useUser';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FIREBASE_AUTH, FIREBASE_STORRAGE } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const BecomeFarmerModal = ({  isVisible, onClose }) => {
    const [FarmName, setFarmName] = useState('');
    const [FarmDescription, setFarmDescription] = useState('');
    const [FarmImage,setFarmImage] = useState(undefined);
    const [FarmImageLink,setFarmImageLink] = useState(undefined);
    const user = useUserContext();
    const userUpdate = useUserUpdateContext();

    useEffect(() => {
        console.log("VideoModal is visible: ", isVisible);
    }, [isVisible]);

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
                setFarmImageLink(download_url);
            })
        })
         
    }

    const becomeAFarmer = async () => {
        console.log(user);
        console.log(FarmImageLink);
        console.log("Becoming a farmer with name: ", FarmName, " and description: ", FarmDescription,"user:",user.uid);
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/add_farm`,
            {"owner": user.uid, "name": FarmName, "description": FarmDescription,"image":FarmImageLink, "latitude": 0, "longitude": 0}
            ).catch((error) => {
            console.log("error");
            console.log(error);
        });
        console.log(response.data);
        if(response.data.code == "0"){
            userUpdate({command: "get_user", data: user});
            onClose();
        }

    }

    return (
        <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
            <View  style={styles.modal_container}>
                <Text style={styles.modal_title}>Become a farmer</Text>
                <InputField 
                    label="Numele fermei" 
                    placeholder="Numele fermei tale" 
                    value={FarmName}
                    onChangeText={setFarmName}></InputField>
                <InputField 
                    label="Descrierea fermei" 
                    placeholder="Descrierea fermei tale" 
                    value={FarmDescription}
                    multiline={true}
                    styles={{ height:200, textAlignVertical: 'top',}}
                    onChangeText={setFarmDescription}></InputField>
                <SquaredButton style={styles.add_image_button} title="Adauga imagine" onPress={()=>pickImage()}></SquaredButton>
                    

                <View style={styles.save_exit_buttons_container}>
                    <SquaredButton onPress={()=>onClose()} style={{backgroundColor:COLORS.secondary}} title="anuleaza"></SquaredButton>
                    <SquaredButton onPress={()=>becomeAFarmer()} title="continua"></SquaredButton>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modal_title: {
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        color: COLORS.primary,
        marginBottom: 16,
    },
    save_exit_buttons_container: {
        flexDirection: 'row',
        gap: 16,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modal_container:{
        backgroundColor:COLORS.background,
        padding: 32,
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 16,
        width: '100%',
    },
});

export default BecomeFarmerModal;