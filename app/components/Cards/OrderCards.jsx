import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../../constants/colors';

const OrderCards = () => {
    return(
        <View>
            <Text>Ordered cattofu from:</Text>
            <Text>
        hello
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        position:'relative',
        flexDirection: "column",
        justifyContent: "flex-start",
        flex:1,
    }
})
export default OrderCards;