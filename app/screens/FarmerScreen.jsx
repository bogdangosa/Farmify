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

const FarmerScreen = ({route}) => {
    console.log("Route object:", route);
    const [ProducesData,setProducesData] = useState([]);
    const [FarmData,setFarmData] = useState([]);
    const {farm_id} = route.params
    const [produceIndex, setProduceIndex] = useState(undefined)
    const [isVisible, setIsVisible] = useState(false)

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

    return (
        <View>
        <View style={styles.container}>
            <FarmImageCard farm_name={FarmData?.name}></FarmImageCard>
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
            <AddOrderModal data={ProducesData[produceIndex]} isVisible={produceIndex!=undefined} onClose={() =>setProduceIndex(undefined)}></AddOrderModal>
        </View>
            <Text style={styles.textContainer}>Produsele fermei</Text>
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
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 20,
    },
    containerImage:{
       position:"absolute",
        paddingHorizontal: 10,
        gap: 20
    },
    textContainer:{
        position:"absolute",
        paddingTop:200, //change this to move my produce
        paddingHorizontal: 20,
        fontFamily: "Nunito_700Bold",
        fontSize:25,
        color: COLORS.primary
    }

});
export default FarmerScreen;