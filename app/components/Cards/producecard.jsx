import CartofSvg from "../../../assets/cartof.svg"
import {Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/colors";

const ProduceCard = ({title,onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.card}>
           <CartofSvg height="50" width="50"/>
            <Text style={styles.textstyle}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor: COLORS.accent2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "25%"
        // Add any additional styles or override default styles here
    },
    textstyle:{
        fontStyle: 'Nunito_700Bold',
        fontSize: 18,
        color: COLORS.background

    }
});
export default ProduceCard;