import React, { useEffect ,useState} from 'react';
import { View, Text,RefreshControl, StyleSheet } from 'react-native';
import FarmerCard from "../components/Cards/FarmerCard";
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../constants/colors';
import axios from 'axios';
import NoSubscriptionCard from '../components/Cards/NoSubscriptionCard';
import SelectMembershipModal from '../Modals/SelectMembershipModal';
import { useUserContext } from '../contexts/UserContext';
import SubscriptionCardHome from '../components/Cards/SubscriptionCardHome';

const HomeScreen = ({navigation}) => {
    const [FarmersData, setFarmersData] = useState([]);
    const [Refreshing, setRefreshing] = React.useState(false);
    const [OpenSubscriptionModalState, setOpenSubscriptionModalState] = useState(false);
    const user = useUserContext();

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      getFarmersData();
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);


    useEffect(() => {
        getFarmersData();
    }, []);



    const getFarmersData = async () => {
        const response = await axios.get(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_all_farms`).catch((error) => {
                console.log("error");
                console.log(error);
            });
        
        console.log("response");
        console.log(response.data);
        setFarmersData(response.data);
    }

    const openFarmerScreen = (id) => {
        console.log("Opening farmer screen with id: ", id);
        navigation.navigate('Farmer',{farm_id:id});
    }

    const OpenMap = () => {
        console.log("Opening map");
        navigation.navigate('Map');
    }

    return (
        <ScrollView
        refreshControl={
            <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                {user?.subscription_type=="none"?<NoSubscriptionCard onPress={()=>setOpenSubscriptionModalState(true)}></NoSubscriptionCard>:(
                    user?.subscription_type!=undefined?<SubscriptionCardHome subscription_type={user.subscription_type}></SubscriptionCardHome>:<></>
                )}
                <View style={styles.farmer_view_top_container}>
                    <Text style={styles.title}>See local farmers</Text>
                    <Text style={styles.map_button} onPress={OpenMap}>Map</Text>
                </View>
                <View style={styles.farmer_cards_container}>
                    {FarmersData?.map((farmer, index) => {
                        return (
                            <FarmerCard key={index} onPress={()=>openFarmerScreen(farmer.id)} title={farmer.name} description={farmer.description}/>
                        );
                    })}
                </View>
                <SelectMembershipModal isVisible={OpenSubscriptionModalState} onClose={()=>setOpenSubscriptionModalState(false)}></SelectMembershipModal>
     
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    farmer_cards_container: {
        width: "100%",
        gap: 16,
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

export default HomeScreen;