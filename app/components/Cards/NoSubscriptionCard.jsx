import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { COLORS } from '../../constants/colors';
import SquaredSvgButton from './SquaredSvgButton';
import CarrotSvg from '../../../assets/carrot.svg';
import DefaultContainer from '../Containers/DefaultContainer';

const NoSubscriptionCard = ({onPress}) => {

    return (
        <DefaultContainer onPress={onPress} style={{backgroundColor:COLORS.secondary}}>
                <SquaredSvgButton color={"#A8A8A8"}><CarrotSvg height="32" width="32"></CarrotSvg></SquaredSvgButton>
                <View style={styles.text_container}>
                    
                <Text style={styles.title}>No subscription yet</Text>
                <Text style={styles.text}>Get your subscription now!</Text>
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

export default NoSubscriptionCard;