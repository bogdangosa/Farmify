import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SimpleButton from '../components/Buttons/SimpleButton';
import { COLORS } from '../constants/colors';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import InputField from '../components/FormElements/InputField';

const LoginScreen = ({navigation}) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const [ErrorText, setErrorText] = useState('');
    const auth = FIREBASE_AUTH;

    const handleLogin = async () => {
        const email = Email.replace(/\s/g, '');

        setLoading(true);
        try{
            console.log(email,Password);
            const response = await signInWithEmailAndPassword(auth,email,Password);
            console.log(response);
        }
        catch(error){
            console.log(error);
            setErrorText(error.message);
        }
        finally{
            setLoading(false);
        }
    };

    const sendResetPasswordEmail = async () => {
        const email = Email.replace(/\s/g, '');
        try{
            await sendPasswordResetEmail(auth,email);
            //ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
        }
        catch(error){
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top_bar_buttons}>
                <Text style={[styles.top_bar_buttons_text,{color:COLORS.accent}]}>Login</Text>
                <Text style={styles.top_bar_buttons_text} onPress={()=> navigation.navigate('SignUp')}>Sign up</Text>
            </View>
            <InputField
                style={styles.input}
                placeholder="your Email"
                label={"Email"}
                value={Email}
                onChangeText={setEmail}
            />
            <InputField
                style={styles.input}
                label={"Password"}
                placeholder="Password"
                secureTextEntry
                value={Password}
                onChangeText={setPassword}
            />
            <SimpleButton title="Login" onPress={handleLogin} />
            <Text style={styles.forgot_password_text}>Forgot password? <Text style={styles.forgot_password_text_highlight} onPress={()=>sendResetPasswordEmail()}>get it here</Text></Text>  
        
        </View>
    );
};

const styles = StyleSheet.create({
    top_bar_buttons_text: {
        fontSize: 22,
        fontFamily:'Nunito_700Bold'
    
    },
    top_bar_buttons: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 16,
        backgroundColor: COLORS.background
    },
    input: {
        width: '100%',
    },
    forgot_password_text: {
        fontSize: 16,
        fontFamily:'Nunito_400Regular'
    },
    forgot_password_text_highlight: {
        color: COLORS.accent,
        fontFamily:'Nunito_700Bold'
    }
});

export default LoginScreen;