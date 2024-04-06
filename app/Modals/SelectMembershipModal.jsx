import React, { useEffect , useState} from 'react';
import {Modal, View, Text, StyleSheet, Button, TouchableOpacity, Pressable} from 'react-native';
import SquaredButton from '../components/Buttons/SquaredButton';
import InputField from '../components/FormElements/InputField';
import { COLORS } from '../constants/colors';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import { useUserContext, useUserUpdateContext } from '../contexts/UserContext';
import axios from 'axios';
import BasicSubscribedCardSimple from "../components/Cards/SubcriptionCard";

import SelectableButton from "../components/Buttons/SelectableButton";
import SimpleButton from '../components/Buttons/SimpleButton';


const SelectMembershipModal = ({  isVisible, onClose }) => {
    const [FarmName, setFarmName] = useState('');
    const [FarmDescription, setFarmDescription] = useState('');
    const user = useUserContext();
    const [SelectedSubscription,setSelectedSubscription] = useState("basic");
    const userUpdate = useUserUpdateContext();

    const startSubscription = () =>{
        userUpdate({command: "start_membership", subscription_type: "basic"}); 
    }

    useEffect(() => {
        console.log("VideoModal is visible: ", isVisible);
    }, [isVisible]);

    const onPress = (setter) =>{
        setter((prevState) => !prevState);
    };

    return (
        <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
            <View  style={styles.modal_container}>
                <Text style={styles.modal_title}>Select plan</Text>
                <View style={styles.buttonContainer}>
                    <SelectableButton title={"Basic"}
                                      onPress={()=> setSelectedSubscription("basic")} isSelected={SelectedSubscription==="basic"}></SelectableButton>
                    <SelectableButton title={"Extra"}
                                      onPress={()=> setSelectedSubscription("extra")} isSelected={SelectedSubscription==="extra"}></SelectableButton>
                    <SelectableButton title={"Premium"}
                                      onPress={()=> setSelectedSubscription("premium")} isSelected={SelectedSubscription==="premium"}></SelectableButton>


                </View>
                <Text style={styles.modal_title}>Alege un abonament</Text>
                <BasicSubscribedCardSimple color1={COLORS.accent} color2={COLORS.accent2} textTitle={'Basic'} textDescription={'Hello\nHello\nHello'} textPrice={'20 Lei/Month'}></BasicSubscribedCardSimple>
                <SimpleButton title={"aboneaza-te"} onPress={()=>startSubscription()}></SimpleButton>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modal_title: {
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        color: COLORS.primary,
        marginBottom: 0,
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
    buttonContainer:{
        backgroundColor:COLORS.background,
        flexDirection:"row",
        height: '10%',
        marginLeft:35,
        marginRight:35,
        paddingTop:30,
        marginTop:-20
    },
    buttonStyle:{
        backgroundColor:COLORS.background2,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        width: "38%",
        margin:10,
    },
    buttonText:{
        color: COLORS.primary,
        fontSize:30,
    }
});

export default SelectMembershipModal;