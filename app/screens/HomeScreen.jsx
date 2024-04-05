import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FarmerCard from "../components/Cards/FarmerCard";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Farmify!</Text>
            <FarmerCard title={"Ferma Lui Marian"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default HomeScreen;