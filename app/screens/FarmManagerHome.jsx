import React, { useEffect ,useState} from 'react';
import { View, Text,RefreshControl, StyleSheet } from 'react-native';
import FarmerCard from "../components/Cards/FarmerCard";
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../constants/colors';
import axios from 'axios';
import NoSubscriptionCard from '../components/Cards/NoSubscriptionCard';
import SquaredButton from '../components/Buttons/SquaredButton';
import CurrentOrdersCard from '../components/Cards/CurrentOrdersCard';
import { useUserContext } from '../contexts/UserContext';
import AddProduceModal from '../Modals/AddProduceModal';
import ProduceCardExtended from '../components/Cards/ProduceCardExtended';
import { Dialog } from 'react-native-ui-lib/src/incubator';
import { PanningProvider } from 'react-native-ui-lib';
import InputField from '../components/FormElements/InputField';

const FarmManagerHome = ({navigation}) => {
    const [FarmData, setFarmData] = useState([]);
    const [ProducesData, setProducesData] = useState([]);
    const [Refreshing, setRefreshing] = React.useState(false);
    const [AddProduceModalState,setAddProduceModalState] = useState(false);
    const user = useUserContext();
    const [ProduceName, setProduceName] = useState('');


    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        getFarmData();
        setRefreshing(false);
      }, 2000);
    }, []);

    useEffect(() => {
        if(user==undefined){
            return;
        }
        getFarmData();

    }, [user]);

    const getFarmData = async () => {
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_farms`,{id:user.uid}).catch((error) => {
                console.log("error here");
                console.log(error);
            });
        
        console.log("response");
        console.log(response.data[0]);
        setFarmData(response.data);
        getProduceData(response.data[0].id);
    }

    const getProduceData = async(farm_id) => {
        console.log(farm_id)
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_produce`, {'farm_id': farm_id}).catch((error) => {
            console.log("error");
            console.log(error);
        });
        console.log(response.data);
        setProducesData(response.data);
    }

    const addProduce = async (name,stock) => {
        console.log(name,stock);
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/add_produce`,
            {"farm_id": FarmData[0].id, "produce": name,"stock":stock}
            ).catch((error) => {
            console.log("error");
            console.log(error);
        });
        console.log(response.data);
        if(response.data.code == "0"){
            setAddProduceModalState(false);
            getProduceData(FarmData[0].id);
        }
        else{
            setAddProduceModalState(false);
        }
    }

    return (
        <ScrollView
        refreshControl={
            <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                <CurrentOrdersCard number_of_orders={FarmData[0]?.orders}r></CurrentOrdersCard>

                <View style={[styles.inline,{marginTop:16}]}>
                    <Text style={styles.title}>Produsele tale</Text>
                    <SquaredButton onPress={()=>setAddProduceModalState(true)} title="adauga"></SquaredButton>
                </View>
                {ProducesData?.map((produce, index) => {
                    return <ProduceCardExtended key={index} title={produce.produce} stock={produce.stock}></ProduceCardExtended>
                })}
                
                
                <AddProduceModal isVisible={AddProduceModalState} onClose={()=>setAddProduceModalState(false)} addProduce={(name,stock)=>addProduce(name,stock)}></AddProduceModal>
            
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