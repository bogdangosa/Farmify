import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants/colors';

const OrdersScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Orders Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontFamily: "Nunito_700Bold",
        fontSize:25,
        color:COLORS.primary
    },
});


export default OrdersScreen;