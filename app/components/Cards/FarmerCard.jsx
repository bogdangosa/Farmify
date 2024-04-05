import {StyleSheet, Text, View} from "react-native";
import LoggedInStack from "../../../LoggedInStack";
import {COLORS} from "../../constants/colors";

const FarmerCard = ({title}) => {
    return (
        <View style={styles.card}>
            <Text> Hi </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.accent,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // Add any additional styles or override default styles here
    },
    buttonText: {
        color: COLORS.background,
        fontStyle: "normal",
        fontSize: 16,
        // Add any additional styles or override default styles here
    },
});
export default FarmerCard;
