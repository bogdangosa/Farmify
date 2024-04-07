import React, { useEffect } from 'react';
import {View, StyleSheet, Image, Text, Pressable, ImageBackground} from 'react-native';
import { COLORS } from '../../constants/colors';
import SquaredSvgButton from './SquaredSvgButton';
import CarrotSvg from '../../../assets/carrot.svg';
import farmtest from '../../../assets/farmtest.jpg'
import { useWindowDimensions } from 'react-native';

const FarmImageCard = ({farm_name,image}) => {
    

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        console.log("Farm image is: ", image);
    }, [image]);

    return (
        <View style={styles.container}>
            <View style={styles.someothercontainer}>
            <Image
                source={image==undefined?farmtest:{uri:image}}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.text}>{farm_name}</Text>
                <View style={styles.containerBackground}>

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    someothercontainer:{
        zIndex:1,
    },
    container: {
        width: '100%',
        position: "relative",
        zIndex: -1,
        paddingBottom:40, // change this to move produce down

    },
    text:{
      fontFamily: "Nunito_700Bold",
      fontSize:30,
      paddingLeft: 20,
      zIndex: 1,
      paddingTop:100,
      color: COLORS.background,
    },
    image: {
        objectFit:"cover",
        height:"110%",
        width:"100%",
        left:0,
        position: "absolute",
        top:0,
        zIndex:-1,
    },
    containerBackground: {
        position: "absolute",
        backgroundColor: COLORS.primary,
        opacity: 0.3,
        height:'120%',
        width:'120%',
        aspectRatio:16/9,
        left:-20,
        top:-20,
        zIndex:0

    }
});

export default FarmImageCard;