import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FarmerCard from "../components/Cards/FarmerCard";
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../constants/colors';

const HomeScreen = () => {

    const openFarmerScreen = (id) => {
        console.log("Opening farmer screen with id: ", id);
    }

    const OpenMap = () => {
        console.log("Opening map");
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.farmer_view_top_container}>
                    <Text style={styles.title}>See local farmers</Text>
                    <Text style={styles.map_button} onPress={OpenMap}>Map</Text>
                </View>
                <View style={styles.farmer_cards_container}>
                    <FarmerCard onPress={()=>openFarmerScreen(0)} title={"Ferma Lui Marian"} description="Suntem o afacere familială dedicată cultivării și vânzării de legume proaspete și sănătoase pentru comunitatea noastră locală. Situată în inima peisajului rural, ferma noastră se ..."/>
                    <FarmerCard onPress={()=>openFarmerScreen(0)} title={"Ferma Lui Marian"} description="Suntem o afacere familială dedicată cultivării și vânzării de legume proaspete și sănătoase pentru comunitatea noastră locală. Situată în inima peisajului rural, ferma noastră se ..."/>
                    <FarmerCard onPress={()=>openFarmerScreen(0)} title={"Ferma Lui Marian"} description="Suntem o afacere familială dedicată cultivării și vânzării de legume proaspete și sănătoase pentru comunitatea noastră locală. Situată în inima peisajului rural, ferma noastră se ..."/>
                    <FarmerCard onPress={()=>openFarmerScreen(0)} title={"Ferma Lui Marian"} description="Suntem o afacere familială dedicată cultivării și vânzării de legume proaspete și sănătoase pentru comunitatea noastră locală. Situată în inima peisajului rural, ferma noastră se ..."/>
                    <FarmerCard onPress={()=>openFarmerScreen(0)} title={"Ferma Lui Marian"} description="Suntem o afacere familială dedicată cultivării și vânzării de legume proaspete și sănătoase pentru comunitatea noastră locală. Situată în inima peisajului rural, ferma noastră se ..."/>
                
                </View>
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
        padding: 8,
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