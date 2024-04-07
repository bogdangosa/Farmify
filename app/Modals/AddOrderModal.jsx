import React, { useEffect , useState} from 'react';
import { Modal, View, Text ,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import SquaredButton from '../components/Buttons/SquaredButton';
import InputField from '../components/FormElements/InputField';
import { COLORS } from '../constants/colors';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import { useUserContext } from '../contexts/UserContext';
import axios from 'axios';
import { Dialog, PanningProvider } from 'react-native-ui-lib';

const AddOrderModal = ({  isVisible, onClose, stock, data,addOrder}) => {;
    const [amount, setAmount] = useState('');
    const user = useUserContext();

    useEffect(() => {
        console.log("VideoModal is visible: ", isVisible);
    }, [isVisible]);

    return (
        <Dialog
            visible={isVisible}
            onDismiss={() =>onClose()}

            panDirection={PanningProvider.Directions.DOWN}>
            <View  style={styles.modal_container}>

                <Text style={styles.modal_title}>Da o comanda de {data?.produce}</Text>
                <InputField
                    label="Cantitatea"
                    placeholder="Selecteaza cantitatea"
                    Amount={amount}
                    keyboardType="numeric"
                    onChangeText={setAmount}></InputField>
                <View style={styles.save_exit_buttons_container}>
                    <SquaredButton onPress={()=>onClose()} style={{backgroundColor:COLORS.secondary}} title="anuleaza"></SquaredButton>
                    <SquaredButton onPress={()=>addOrder(amount,data.id)} title="comanda"></SquaredButton>
                </View>
            </View>
        </Dialog>
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
        borderRadius: 16,
        gap: 16,
    },

});

export default AddOrderModal;