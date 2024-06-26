import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../../constants/colors';

const OrderCards = ({amount,produce_name}) => {
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.textElementTitle}>Ordered {amount}kg {produce_name} from:</Text>
            <Text style={styles.textElementName}>
        MARINEL NICU SRL.
            </Text>
            <Text style={styles.textArrivalDate}>{'Arrival Date: 30/06/2024\nMonthly'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        position:'relative',
        flexDirection: "column",
        backgroundColor:COLORS.background2,
        width: '94%',
        paddingHorizontal: 15,
        paddingVertical: 30,
        marginVertical: 5,
        gap: 5,
        borderRadius:10,
        borderLeftWidth: 10,
        borderLeftColor: COLORS.accent
    },
    textElementTitle:{
        fontSize: 20,
        fontFamily: "Nunito_600SemiBold"
    },
    textElementName:{
        fontSize: 22,
        fontFamily: "Nunito_700Bold"
    },
    textArrivalDate:{
        fontSize: 14,
        fontFamily: "Nunito_600SemiBold",
        textAlign: "right",
        marginTop: 20,

    }
})
export default OrderCards;