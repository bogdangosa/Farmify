import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { COLORS } from '../../constants/colors';
import SquaredSvgButton from './SquaredSvgButton';
import CarrotSvg from '../../../assets/carrot.svg';

const BecomeAFarmerCard = ({onPress}) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.card}>
                <SquaredSvgButton color={COLORS.accent2}><CarrotSvg height="32" width="32"></CarrotSvg></SquaredSvgButton>
                <View style={styles.text_container}>
                    
                <Text style={styles.title}>Become a farmer!</Text>
                <Text style={styles.text}>Enter your details here</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = {
    text_container: {
        flex: 1,
    },
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        padding: 16,
        margin: 8,
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