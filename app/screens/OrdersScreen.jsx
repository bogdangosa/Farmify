
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import { COLORS } from '../constants/colors';
import axios from 'axios';
import OrderCard from '../components/Cards/OrderCard';
//const {height, width} = useWindowDimensions();

const OrdersScreen = ({route,navigation}) => {
    const {farm_id} = route.params
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        console.log("Farm id is: ", farm_id);
        if (farm_id == undefined){
            return
        }   
        getOrders(farm_id);
    }, [farm_id]);

    const getOrders = async (farm_id) => {
        console.log(farm_id);
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_orders`,{farm_id:farm_id}).catch((error) => {
                console.log("error here");
                console.log(error);
            });
        
        console.log("response");
        console.log(response.data);
        setOrders(response.data);
    }

    const completeOrder = async (order_id) => {
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/complete_order`,{id:order_id,farm_id:farm_id}).catch((error) => {
                console.log("error here");
                console.log(error);
            });
        
        console.log("response");
        console.log(response.data);
        getOrders(farm_id);
    }


    return (
        <ScrollView style={{height:"100%"}}>
            <View style={styles.container}>
                <Text style={styles.title}>Orders Screen</Text>
                <View style={styles.orders_container}>
                    {Orders?.map((order,index) => {    
                        return <OrderCard onComplete={()=>completeOrder(order.order_id)} key={index} title={"cartof"} amount={order.amount}></OrderCard>
                    })}
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    orders_container: {
        gap: 16,
    },
    container: {
        flex: 1,
        padding: 16,
        height: "100%",
    },
    title: {
        fontFamily: "Nunito_700Bold",
        fontSize:25,
        color:COLORS.primary,
        marginBottom: 16,
    },
});


export default OrdersScreen;