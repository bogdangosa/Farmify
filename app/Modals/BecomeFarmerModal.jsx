import React, { useEffect , useState} from 'react';
import { Modal, View, Text ,StyleSheet} from 'react-native';
import SquaredButton from '../components/Buttons/SquaredButton';
import InputField from '../components/FormElements/InputField';
import { COLORS } from '../constants/colors';
import BecomeAFarmerCard from '../components/Cards/BecomeAFarmerCard';

const BecomeFarmerModal = ({  isVisible, onClose }) => {
    const [FarmName, setFarmName] = useState('');
    const [FarmDescription, setFarmDescription] = useState('');

    useEffect(() => {
        console.log("VideoModal is visible: ", isVisible);
    }, [isVisible]);

    const becomeAFarmer = () => {
        console.log("Becoming a farmer with name: ", FarmName, " and description: ", FarmDescription);
        onClose();
    }

    return (
        <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
            <View  style={styles.modal_container}>
                <Text style={styles.modal_title}>Become a farmer</Text>
                <InputField 
                    label="Numele fermei" 
                    placeholder="numele fermei tale" 
                    value={FarmName}
                    onChangeText={setFarmName}></InputField>
                <InputField 
                    label="Descrierea fermei" 
                    placeholder="descrierea fermei tale" 
                    value={FarmDescription}
                    multiline={true}
                    styles={{ height:200, textAlignVertical: 'top',}}
                    onChangeText={setFarmDescription}></InputField>
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