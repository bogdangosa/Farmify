import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/colors";
import {LinearGradient} from 'expo-linear-gradient';
const BasicSubscribedCardSimple=()=>{

    return(
        <LinearGradient
            colors={[COLORS.accent, COLORS.accent2] }
            style={styles.containerGradient}>
            <Text style={styles.TextTitle}>Basic</Text>
            <Text style={styles.textDescription}>{'Hello\nHello\nHello'}</Text>
            <Text style={styles.textPrice}>20 Lei/Month</Text>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    containerGradient:{
        flexDirection:"column",
        justifyContent: "flex-start",
        width: "100%",
        borderRadius: 15,
    },
    TextTitle:{
        width:'100%',
        fontSize: 40,
        fontFamily: "Nunito_700Bold",
        color:COLORS.background,
        padding: 10,
        paddingLeft:20
    },

    textDescription:{
        width:'70%',
        fontSize:18,
        fontFamily:"Nunito_400Regular",
        color: COLORS.background,
        paddingTop:5,
        paddingLeft: 40,
    },
    textPrice:{
        fontSize:25,
        fontFamily: "Nunito_700Bold",
        paddingLeft: 250,
        color: COLORS.background
    }

});

export default BasicSubscribedCardSimple;