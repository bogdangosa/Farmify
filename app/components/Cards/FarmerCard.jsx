import {StyleSheet, Text, View} from "react-native";
import LoggedInStack from "../../../LoggedInStack";

const FarmerCard = ({title}) => {
    return (
        <View style={styles.container}>
            <Text> Hi </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default FarmerCard;
