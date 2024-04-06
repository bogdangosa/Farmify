import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultContainer from '../Containers/DefaultContainer';
import { COLORS } from '../../constants/colors';
import CarrotSvg from '../../../assets/carrot.svg';
import SquaredSvgButton from './SquaredSvgButton';
import { Swipeable } from 'react-native-gesture-handler';
import { Drawer } from 'react-native-ui-lib';
import { ProduceSvg } from '../../utils/ProduceSvg';


const OrderCard = ({ title, amount,style,onPress,onComplete}) => {
    return (
        <Drawer 
        onFullSwipeLeft={true}
        onFullSwipeRight={true}
        leftItem={{text: 'Complete', background: COLORS.complete,fontFamily:"Nunito_400Regular", onPress: () => onComplete()}}
>
            <DefaultContainer onPress={onPress} style={{backgroundColor:COLORS.background2}}>
                <SquaredSvgButton color={"#DDDDDD"}><ProduceSvg produce={title} height="32" width="32"></ProduceSvg></SquaredSvgButton>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.stock}>{amount}<Text style={styles.type}>kg</Text></Text>
            </DefaultContainer>
        </Drawer>
    );
};

const styles = StyleSheet.create({
    title: {
        color: COLORS.primary,
        fontSize: 18,
        fontFamily: "Nunito_700Bold",
    },
    stock: {
        marginLeft: "auto",
        alignSelf: "flex-end",
        color: COLORS.primary,
        fontSize: 20,
        fontFamily: "Nunito_400Regular",
    },
    type: {
        fontSize: 12,
        color: COLORS.secondary,
    },
    description: {
        fontSize: 14,
        color: '#888',
    },
});

export default OrderCard;