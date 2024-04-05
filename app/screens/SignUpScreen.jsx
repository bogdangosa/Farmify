import React, { useState } from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const SignUpScreen = ({navigation}) => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;;

    const handleSignup = () => {
        // Implement your sign-up logic here
    };

    
    return (
        <View style={styles.container}>
            <View style={styles.top_bar_buttons}>
                <Text style={styles.top_bar_buttons_text}>Login</Text>
                <Text style={[styles.top_bar_buttons_text,{color:COLORS.accent}]} onPress={()=> navigation.navigate('SignUp')}>Sign up</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={setName}
                value={Name}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={Email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={Password}
            />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
};

const styles = StyleSheet.create({
    top_bar_buttons_text: {
        fontSize: 16,
    
    },
    top_bar_buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default SignUpScreen;