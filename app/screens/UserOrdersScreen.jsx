import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, RefreshControl} from 'react-native';
import { COLORS } from '../constants/colors';
import OrderCards from "../components/Cards/OrderCards";
import {ScrollView} from "react-native-gesture-handler";
import axios from 'axios';
import { useUserContext } from '../contexts/UserContext';


const OrdersScreen = () => {
    const user = useUserContext();
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        console.log("User is: ", user);
        if (user == undefined){
            return
        }
        getOrders(user.uid);
    }, [user]);

    const getOrders = async (user_id) => {
        console.log(user_id);
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_orders`,{user_id:user_id}).catch((error) => {
            console.log("error here");
            console.log(error);
        });

        console.log("response  ordeee");
        console.log(response.data);
        setOrders(response.data);
    }



    const [Refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(()=>{
        setRefreshing(true);
        setTimeout(()=>{
            getOrders(user.uid);
            setRefreshing(false);
        }, 2000)
    }, []);
    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={Refreshing} onRefresh={onRefresh}/> }>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Comenzile mele</Text>
                {Orders?.map((order,index) => {
                    return <OrderCards key={index} produce_name={order.produce_name} amount={order.amount}></OrderCards>
                })}
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    title: {
        fontFamily: "Nunito_700Bold",
        fontSize:25,
        color:COLORS.primary,
        marginVertical:20,
    },
    mainContainer:{
        justifyContent: "center",
        alignItems: "center"
    }
});


export default OrdersScreen;