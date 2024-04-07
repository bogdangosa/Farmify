import {Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/colors";

const FarmerCard = ({title,description,onPress}) => {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.description} numberOfLines={2}> {description} </Text>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.background2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        // Add any additional styles or override default styles here
    },
    title:{
        fontSize: 20,
        fontFamily: "Nunito_700Bold",
        color: COLORS.primary,
    },
    description:{
        fontSize: 14,
        fontFamily: "Nunito_400Regular",
        color: COLORS.secondary,
    },
    buttonText: {
        color: COLORS.background,
        fontStyle: "normal",
        fontSize: 16,
        // Add any additional styles or override default styles here
    },
});
export default FarmerCard;
