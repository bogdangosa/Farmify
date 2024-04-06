import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { COLORS } from '../../constants/colors';
import SquaredSvgButton from './SquaredSvgButton';
import CarrotSvg from '../../../assets/carrot.svg';
import DefaultContainer from '../Containers/DefaultContainer';

const CurrentOrdersCard = ({onPress,number_of_orders,style}) => {

    return (
        <DefaultContainer onPress={onPress} style={style}>
            <View style={styles.text_container}>
                <Text style={styles.title}>Nr. comenzi curente:</Text>
                <Text style={styles.text}>Apasa aici pentru a vedea comenzile </Text>
            </View>
            <Text style={styles.number_of_orders_text}>{number_of_orders}</Text>
        </DefaultContainer>
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
    number_of_orders_text: {
        color: COLORS.background,
        fontSize: 28,
        fontFamily: "Nunito_700Bold",
    },
};

export default CurrentOrdersCard;