import React from 'react';
import { View,Pressable , StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const DefaultContainer = ({ children ,onPress,style}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.card,style]}>
                {children}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        padding: 16,
    },
});

export default DefaultContainer;