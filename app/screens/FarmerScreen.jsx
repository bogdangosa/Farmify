import React from 'react';
import { View, Text } from 'react-native';
import {Pressable, StyleSheet} from "react-native";
import FarmerCard from "../components/Cards/FarmerCard";
import ProduceCard from "../components/Cards/producecard";

const FarmerScreen = () => {
    return (
        <View style={styles.container}>
            <ProduceCard title="cartof"></ProduceCard>
            <ProduceCard title="cartof"></ProduceCard>
            <ProduceCard title="cartof"></ProduceCard>
            <ProduceCard title="cartof"></ProduceCard>

        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between",
        margin: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 20

    }
});
export default FarmerScreen;