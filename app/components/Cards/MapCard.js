import DefaultContainer from "../Containers/DefaultContainer";
import {COLORS} from "../../constants/colors";
import SquaredSvgButton from "./SquaredSvgButton";
import CarrotSvg from "../../../assets/carrot.svg";
import {Text, View} from "react-native";

<MapView style={styles.map} />

const MapCard = ({onPress}) => {

    return (
        <DefaultContainer onPress={onPress} style={{backgroundColor:COLORS.secondary}}>
            
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

export default MapCard;