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
                <Text style={styles.modal_title}>Alege un abonament</Text>
                <View style={styles.buttonContainer}>
                    <SelectableButton title={"Basic"}
                                      onPress={()=> setSelectedSubscription("basic")} isSelected={SelectedSubscription==="basic"}></SelectableButton>
                    <SelectableButton title={"Extra"}
                                      selected_style={{backgroundColor:COLORS.extraAccent1}}
                                      onPress={()=> setSelectedSubscription("extra")} isSelected={SelectedSubscription==="extra"}></SelectableButton>
                    <SelectableButton title={"Premium"}
                                      selected_style={{backgroundColor:COLORS.premiumAccent1}}
                                      onPress={()=> setSelectedSubscription("premium")} isSelected={SelectedSubscription==="premium"}></SelectableButton>


                </View>
                {SelectedSubscription==='basic' && <BasicSubscribedCardSimple color1={COLORS.accent} color2={COLORS.accent2} textTitle={'Basic'} textDescription={'Hello\nHello\nHello'} textPrice={'20 Lei/Month'}></BasicSubscribedCardSimple>}
                {SelectedSubscription==='extra' && <BasicSubscribedCardSimple color1={COLORS.extraAccent2} color2={COLORS.extraAccent1} textTitle={'Extra'} textDescription={'Hello\nHello\nHello'} textPrice={'20 Lei/Month'}></BasicSubscribedCardSimple>}
                {SelectedSubscription==='premium' && <BasicSubscribedCardSimple color1={COLORS.premiumAccent1} color2={COLORS.premiumAccent2} textTitle={'Premium'} textDescription={'Hello\nHello\nHello'} textPrice={'20 Lei/Month'}></BasicSubscribedCardSimple>}
                <SimpleButton style={SelectedSubscription!='basic'?(SelectedSubscription==="extra"?{backgroundColor:COLORS.extraAccent2}:{backgroundColor: COLORS.premiumAccent1}):{}} title={"Aboneaza-te"} onPress={()=>startSubscription()}></SimpleButton>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modal_title: {
        fontSize: 28,
        fontFamily: 'Nunito_700Bold',
        color: COLORS.primary,
        marginBottom: 0,
        paddingTop:32,
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
        paddingHorizontal:35,
        paddingTop:15,
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
    },
    buttonExtra:{
        backgroundColor:COLORS.extraAccent2
    },
    buttonPremium:{
        backgroundColor:COLORS.premiumAccent1
    }
});

export default SelectMembershipModal;