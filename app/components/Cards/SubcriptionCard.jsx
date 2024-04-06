import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/colors";
import {LinearGradient} from 'expo-linear-gradient';
const BasicSubscribedCardSimple=({color1, color2, textTitle, textDescription, textPrice})=>{

    return(
        <LinearGradient
            colors={[color1, color2] }
            style={styles.containerGradient}>
            <Text style={styles.TextTitle}>{textTitle}</Text>
            <View style={styles.bulet_points_container}>
                <Text style={styles.textDescription}>{textDescription}</Text>
            </View>
            <Text style={styles.textPrice}>{textPrice}</Text>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    containerGradient:{
        flexDirection:"column",
        justifyContent: "flex-start",
        width: "100%",
        borderRadius: 15,
        position: "relative",
        paddingLeft: 20,
        paddingBottom: 20,
    },
    TextTitle:{
        width:'100%',
        fontSize: 40,
        fontFamily: "Nunito_700Bold",
        color:COLORS.background,
        padding: 10,
    },

    textDescription:{
        width:'70%',
        fontSize:18,
        fontFamily:"Nunito_400Regular",
        color: COLORS.background,
        paddingTop:5,
    },
    textPrice:{
        fontSize:25,
        fontFamily: "Nunito_700Bold",
        position: "absolute",
        right: 20,
        bottom: 20,
        color: COLORS.background,

    }

});

export default BasicSubscribedCardSimple;