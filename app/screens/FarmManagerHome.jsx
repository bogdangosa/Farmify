import React, { useEffect ,useState} from 'react';
import { View, Text,RefreshControl, StyleSheet } from 'react-native';
import FarmerCard from "../components/Cards/FarmerCard";
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../constants/colors';
import axios from 'axios';
import NoSubscriptionCard from '../components/Cards/NoSubscriptionCard';
import SquaredButton from '../components/Buttons/SquaredButton';
import CurrentOrdersCard from '../components/Cards/CurrentOrdersCard';

const FarmManagerHome = ({navigation}) => {
    const [FarmData, setFarmData] = useState([]);
    const [Refreshing, setRefreshing] = React.useState(false);
    const [AddProduceModalState,setAddProduceModalState] = useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
    useEffect(() => {
        getFarmData();
    }, []);

    const getFarmData = async () => {
        /*const response = await axios.get(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_all_farms`).catch((error) => {
                console.log("error");
                console.log(error);
            });
        
        console.log("response");
        console.log(response.data);
        setFarmData(response.data);*/
    }



    return (
        <ScrollView
        refreshControl={
            <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                <CurrentOrdersCard number_of_orders={2}></CurrentOrdersCard>

                <View style={[styles.inline,{marginTop:16}]}>
                    <Text style={styles.title}>Produsele tale</Text>
                    <SquaredButton onPress={()=>setAddProduceModalState(true)} title="adauga"></SquaredButton>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    farmer_cards_container: {
        width: "100%",
        gap: 16,
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    container: {
        padding: 10,
        paddingTop: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 16,
    },
    farmer_view_top_container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        paddingHorizontal: 16,
    },
    map_button: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
        color: COLORS.accent,
    }
});

export default FarmManagerHome;