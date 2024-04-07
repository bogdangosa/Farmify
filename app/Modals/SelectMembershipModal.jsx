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
import {Icon} from "react-native-ui-lib";
import SquaredSvgButton from "../components/Cards/SquaredSvgButton";
import CarrotSvg from "../../assets/carrot.svg";


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
                {SelectedSubscription==='basic' && <BasicSubscribedCardSimple color1={COLORS.accent2} color2={COLORS.accent} textTitle={'Basic'} textPrice={'20 Lei/luna'}></BasicSubscribedCardSimple>}

                {SelectedSubscription==='extra' && <BasicSubscribedCardSimple color1={COLORS.extraAccent1} color2={COLORS.extraAccent2} textTitle={'Extra'}  textPrice={'35 Lei/luna'}></BasicSubscribedCardSimple>}

                {SelectedSubscription==='premium' && <BasicSubscribedCardSimple color1={COLORS.premiumAccent2} color2={COLORS.premiumAccent1} textTitle={'Premium'}  textPrice={'45 Lei/luna'}></BasicSubscribedCardSimple>}

                <SimpleButton style={SelectedSubscription!='basic'?(SelectedSubscription==="extra"?{backgroundColor:COLORS.extraAccent2}:{backgroundColor: COLORS.premiumAccent1}):{}} title={"Aboneaza-te"} onPress={()=>startSubscription()}></SimpleButton>
                {SelectedSubscription==='basic' &&
                <View style={styles.bulletPointContainer}>
                    <SquaredSvgButton color={COLORS.accent2} style={{flex: 7}}><CarrotSvg height="32" width="32"></CarrotSvg></SquaredSvgButton>
                    <View style={{flex: 1}}>
                        <Text style={styles.textDescription}>Pachet esential</Text>
                        <Text style={styles.textDescriptionSmall}>saptamanal de la 3 vanzatori locali</Text>
                    </View>
                </View>}
                {SelectedSubscription==='extra' &&
                <View style={styles.bulletPointContainer}>
                    <SquaredSvgButton color={COLORS.extraAccent1} style={{flex: 7}}><CarrotSvg height="32" width="32"></CarrotSvg></SquaredSvgButton>
                    <View style={{flex: 1}}>
                        <Text style={styles.textDescription}>Pachet standard</Text>
                        <Text style={styles.textDescriptionSmall}>saptamanal de la 5 vanzatori locali</Text>
                    </View>
                </View>}
                {SelectedSubscription==='premium' &&
                <View style={styles.bulletPointContainer}>
                    <SquaredSvgButton color={COLORS.premiumAccent2} style={{flex: 7}}><CarrotSvg height="32" width="32"></CarrotSvg></SquaredSvgButton>
                    <View style={{flex: 1}}>
                        <Text style={styles.textDescription}>Pachet extra</Text>
                        <Text style={styles.textDescriptionSmall}>saptamanal de la 7 vanzatori locali</Text>
                    </View>
                </View>

                }
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create({
    textDescription:{
        fontSize: 28,
        fontFamily: 'Nunito_700Bold',
        marginLeft: 15,
    },
    textDescriptionSmall:{
        fontSize: 20,
        fontFamily: 'Nunito_700Bold',
        marginLeft: 20,
    },
    bulletPointContainer:{
        flexDirection:"row",
        marginTop: 30,
    },
    innerBulletPointContainer:{
        flexDirection:"column",

    },
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