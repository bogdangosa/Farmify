import React from 'react';
import { TextInput , StyleSheet,View,Text} from 'react-native';
import { COLORS } from '../../constants/colors';

const InputField = ({value,secureTextEntry,label,onChangeText,placeholder,styles,multiline,keyboardType}) => {
    return (
        <View style={input_styles.input_field_container}>
            <Text style={input_styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                keyboardType={keyboardType?keyboardType:"default"}
                placeholderTextColor="#AAAAAA"
                style={[input_styles.input,styles]}
                value={value}
                multiline={multiline}
                numberOfLines={multiline?4:1}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const input_styles = StyleSheet.create({
    label: {
        color: COLORS.primary,
        fontSize: 16,
        fontFamily: 'Nunito_700Bold',
    },
    input_field_container: {
        gap: 8,
        width: '100%',
    },
    input: {
        height: 40,
        backgroundColor: COLORS.background2,
        borderRadius: 4,
        padding: 8,
        fontFamily: 'Nunito_400Regular',
        color: COLORS.primary,
    },
});


export default InputField;

