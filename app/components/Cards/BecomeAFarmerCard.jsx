import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { COLORS } from '../../constants/colors';
import SquaredSvgButton from './SquaredSvgButton';
import CarrotSvg from '../../../assets/carrot.svg';
import DefaultContainer from '../Containers/DefaultContainer';

const BecomeAFarmerCard = ({onPress}) => {

    return (
        <DefaultContainer onPress={onPress}>
                <SquaredSvgButton color={COLORS.accent2}><CarrotSvg height="32" width="32"></CarrotSvg></SquaredSvgButton>
                <View style={styles.text_container}>
                    
                <Text style={styles.title}>Devino un fermier!</Text>
                <Text style={styles.text}>Introdu detaliile aici</Text>
                </View>
        </DefaultContainer>
    );
};

const styles = {
    text_container: {
        flex: 1,
    },
    title: {
        color: COLORS.background,
        fontSize: 22,
        fontFamily: "Nunito_700Bold",
    },
    text: {
        color: COLORS.background,
        fontSize: 16,
        fontFamily: "Nunito_400Regular",
    },
};

export default BecomeAFarmerCard;