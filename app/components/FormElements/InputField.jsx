import React from 'react';
import { TextInput , StyleSheet,View,Text} from 'react-native';
import { COLORS } from '../../constants/colors';

const InputField = ({value,label,onChangeText,placeholder,styles}) => {
    return (
        <View style={input_styles.input_field_container}>
            <Text style={input_styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#AAAAAA"
                style={[input_styles.input,styles]}
                value={value}
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

