import React, { useEffect , useState} from 'react';
import {Modal, View, Text, StyleSheet, Button, TouchableOpacity, Pressable} from 'react-native';
import {COLORS} from "../../constants/colors";

const SelectableButton=({title,onPress,isSelected, style1,style2}) =>{
return(
    <Pressable onPress={onPress} style={[styles.buttonStyle,(isSelected?styles.buttonStyleSelected:{})]}>
        <Text style={[styles.buttonText, (isSelected?styles.buttonTextSelected:{})]}>{title}</Text>
    </Pressable>);
};

const styles = StyleSheet.create({
    buttonStyleSelected:{
        backgroundColor:COLORS.accent,
    },
    buttonTextSelected:{
        color:COLORS.background,
    },

    buttonStyle:{
        backgroundColor:COLORS.background2,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        width: "38%",
        margin:10,
    },
    buttonText:{
        color: COLORS.primary,
        fontSize:20,
    }
});

export default SelectableButton;