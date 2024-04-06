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

    const deleteProduce = async (id) => {
        console.log(id);
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/delete_produce`,
            {"produce_id":id}
            ).catch((error) => {
            console.log("error");
            console.log(error);
        });
        console.log(response.data);
        if(response.data.code == "0"){
            getProduceData(FarmData[0].id);
        }
    }

    const addProduce = async (name,stock,price) => {
        console.log(name,stock,price);
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/add_produce`,
            {"farm_id": FarmData[0].id, "produce": name,"stock":stock,"price":price}
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
                <CurrentOrdersCard onPress={()=>navigation.navigate("Orders")} number_of_orders={FarmData[0]?.orders}></CurrentOrdersCard>

                <View style={[styles.inline,{marginTop:16}]}>
                    <Text style={styles.title}>Produsele tale</Text>
                    <SquaredButton onPress={()=>setAddProduceModalState(true)} title="adauga"></SquaredButton>
                </View>
                <View style={styles.produces_container}>
                {ProducesData!=undefined && ProducesData.length>0 ?ProducesData?.map((produce, index) => {
                    return <ProduceCardExtended onDelete={()=>deleteProduce(produce.id)} key={index} title={produce.produce} stock={produce.stock}></ProduceCardExtended>
                }):
                <Text style={styles.no_produce_text}>Nu ai niciun produs, <Text style={styles.highlighted} onPress={()=>setAddProduceModalState(true)}>adauga!</Text></Text>}
                </View>
                
                
                <AddProduceModal isVisible={AddProduceModalState} onClose={()=>setAddProduceModalState(false)} addProduce={(name,stock,price)=>addProduce(name,stock,price)}></AddProduceModal>
            
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    no_produce_text: {
        fontSize: 16,
        fontFamily: 'Nunito_400Regular',
        color: COLORS.primary,
        marginTop: 16,
        width: '100%',
        textAlign: 'center',
    },
    highlighted:{
        color: COLORS.accent,
        fontFamily: 'Nunito_700Bold',
    },
    produces_container: {
        width: '100%',
        gap: 16,
        marginTop: 8,
    },
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