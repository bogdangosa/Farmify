import React, { useEffect , useState} from 'react';
import { Modal, View, Text ,StyleSheet} from 'react-native';
import SquaredButton from '../components/Buttons/SquaredButton';
import InputField from '../components/FormElements/InputField';
import { COLORS } from '../constants/colors';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import { useUserContext } from '../contexts/UserContext';
import axios from 'axios';
import BasicSubscribedCardSimple from "../components/Cards/SubcriptionCard";

const SelectMembershipModal = ({  isVisible, onClose }) => {
    const [FarmName, setFarmName] = useState('');
    const [FarmDescription, setFarmDescription] = useState('');
    const user = useUserContext();

    useEffect(() => {
        console.log("VideoModal is visible: ", isVisible);
    }, [isVisible]);


    return (
        <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
            <View  style={styles.modal_container}>
                <Text style={styles.modal_title}>Select plan</Text>
                <BasicSubscribedCardSimple></BasicSubscribedCardSimple>
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

export default SelectMembershipModal;