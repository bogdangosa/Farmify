import React, { useEffect , useState} from 'react';
import { Modal, View, Text ,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import SquaredButton from '../components/Buttons/SquaredButton';
import InputField from '../components/FormElements/InputField';
import { COLORS } from '../constants/colors';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';
import { useUserContext } from '../contexts/UserContext';
import axios from 'axios';
import { Dialog, PanningProvider } from 'react-native-ui-lib';

const AddProduceModal = ({  isVisible, onClose ,addProduce}) => {
    const [ProduceName, setProduceName] = useState('');
    const [Price, setPrice] = useState('');
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
            
                <Text style={styles.modal_title}>Add a produce</Text>
                <InputField 
                    label="Numele produsului" 
                    placeholder="Numele produsului adaugat" 
                    value={ProduceName}
                    onChangeText={setProduceName}></InputField>
                <InputField 
                    label="Pretul produsului" 
                    placeholder="Pretul produsului adaugat (in kg)" 
                    value={Price}
                    onChangeText={setPrice}></InputField>
                    <View style={styles.save_exit_buttons_container}>
                        <SquaredButton onPress={()=>onClose()} style={{backgroundColor:COLORS.secondary}} title="anuleaza"></SquaredButton>
                        <SquaredButton onPress={()=>addProduce(ProduceName,0,Price)} title="adauga"></SquaredButton>
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

export default AddProduceModal;