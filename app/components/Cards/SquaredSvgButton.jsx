import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SquaredSvgButton = ({children,color}) => {
    return (
        <View style={[styles.container,{backgroundColor:color}]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width:'fit-content',
        height:'fit-content',
        aspectRatio: 1,
        borderRadius: 8,
    },
});

export default SquaredSvgButton;