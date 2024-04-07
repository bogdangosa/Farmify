import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import {Pressable,FlatList, StyleSheet} from "react-native";
import FarmerCard from "../components/Cards/FarmerCard";
import ProduceCard from "../components/Cards/producecard";
import axios from "axios";
import {log} from "expo/build/devtools/logger";
import FarmImageCard from "../components/Cards/FarmImageCard";
import {COLORS} from "../constants/colors";
import AddOrderModal from "../Modals/AddOrderModal";
import { useUserContext } from '../contexts/UserContext';

const FarmerScreen = ({route}) => {
    console.log("Route object:", route);
    const [ProducesData,setProducesData] = useState([]);
    const [FarmData,setFarmData] = useState([]);
    const {farm_id} = route.params
    const [produceIndex, setProduceIndex] = useState(undefined)
    const [isVisible, setIsVisible] = useState(false)
    const user = useUserContext();

    useEffect(()=>{
        if (farm_id == undefined){
            return
        }
        console.log(farm_id)
        getFarmData(farm_id);
        getProduceData(farm_id);
    },[farm_id])

    const getFarmData = async (farm_id) => {
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_farm`,{id:farm_id}).catch((error) => {
                console.log("error here");
                console.log(error);
            });
        
        console.log("response");
        console.log(response.data);
        setFarmData(response.data);
    }

    const getProduceData = async(farm_id) => {
        console.log(farm_id)
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_produce`, {'farm_id': farm_id}).catch((error) => {
            console.log("error");
            console.log(error);

        });
        console.log(response.data);
        const data_array = [...response.data];
        while (data_array.length%3!=0){
            data_array.push({invisible_element:true})
        }
        console.log(data_array)
        setProducesData(data_array);
    }

    const addOrder = async (amount,produce_id) => {
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/add_order`, {'user_id': user.uid,"amount":parseInt(amount),"produce_id":produce_id}).catch((error) => {
            console.log("error");
            console.log(error);

        });
        log(response.data);
    }

    useEffect(() => {
        console.log(FarmData?.image);
    }, [FarmData]);

    return (
        <View style={styles.container}>
            <FarmImageCard farm_name={FarmData?.name} image={FarmData?.image}></FarmImageCard>
            <View style={{paddingHorizontal:20,gap:10,width:"100%"}}>            
                <Text style={styles.title2}>Produsele fermei</Text>
                <FlatList
                    data={ProducesData}
                    numColumns={3}
                    contentContainerStyle={{ gap: 8 }}
                    columnWrapperStyle={{ gap: 8 }}
                    renderItem={({index,item})=>{
                        console.log(index)
                        if(item.invisible_element!==undefined) {
                            console.log("here")
                            return (<ProduceCard style={{opacity: 0}} index={{index}}></ProduceCard>)
                        }
                        return (<ProduceCard onPress={()=>setProduceIndex(index)}  index={index} title={item.produce}/>);
                    }}
                    keyExtractor={(item) => item.id}
                    style={styles.grid_layout}>

                </FlatList>
            </View>

            <AddOrderModal addOrder={(ammount,produce_id)=>addOrder(ammount,produce_id)} data={ProducesData[produceIndex]} isVisible={produceIndex!=undefined} onClose={() =>setProduceIndex(undefined)}></AddOrderModal>
        </View>
    );
};
const styles = StyleSheet.create({
    grid_layout:{
        gap:8,
    },
    container:{
        position:'relative',
        flexDirection: "row",
        flexWrap: 'wrap',
        overflow:"visible",
        width:'100%',
        justifyContent: "space-between",
        gap: 20,
    },
    containerImage:{
       position:"absolute",
        paddingHorizontal: 10,
        gap: 20
    },
    title2: {
        color:COLORS.primary,
        fontFamily: "Nunito_700Bold",
        fontSize:22,
    }

});
export default FarmerScreen;