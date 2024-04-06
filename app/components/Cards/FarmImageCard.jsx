import React from 'react';
import {View, StyleSheet, Image, Text, Pressable, ImageBackground} from 'react-native';
import { COLORS } from '../../constants/colors';
import SquaredSvgButton from './SquaredSvgButton';
import CarrotSvg from '../../../assets/carrot.svg';
import farmtest from '../../../assets/farmtest.jpg'
const FarmImageCard = () => {
    return (
        <View style={styles.container}>
            <Image
                source={farmtest}
                style={styles.image}
                resizeMode="cover" // Ensure the image covers the entire container
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', // Ensure the image takes up the full width of its parent
        aspectRatio: 16 / 9, // Set aspect ratio to maintain a specific height-to-width ratio
        borderRadius: 10
         // Ensure that the image doesn't overflow its container
    },
    image: {
        width: '100%', // Ensure the image takes up the full width of its parent
        height: '100%', // Ensure the image takes up the full height of its parent
    },
});

export default FarmImageCard;