import React from 'react';
import {View, Text, StyleSheet, RefreshControl} from 'react-native';
import { COLORS } from '../constants/colors';
import OrderCards from "../components/Cards/OrderCards";
import {ScrollView} from "react-native-gesture-handler";


const OrdersScreen = () => {
    const [Refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(()=>{
        setRefreshing(true);
        setTimeout(()=>{
            getFarmData();
            setRefreshing(false);
        }, 2000)
    }, []);
    return (
        <ScrollView
            refreshControl={
            <RefreshControl refreshing={Refreshing} onRefresh={onRefresh}/> }>
            }
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Orders Screen</Text>
                <OrderCards></OrderCards>
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