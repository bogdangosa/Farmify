import React, { useState } from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import SimpleButton from '../components/Buttons/SimpleButton';
import InputField from '../components/FormElements/InputField';
import { useUserUpdateContext } from '../contexts/UserContext';

const SignUpScreen = ({navigation}) => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const [ErrorText, setErrorText] = useState('');
    const auth = FIREBASE_AUTH;
    const updateUser = useUserUpdateContext();

    const handleSignup = () => {
        const email = Email.replace(/\s/g, '');
        setLoading(true);
        console.log(Email,Password);
        const response = createUserWithEmailAndPassword(auth,email,Password  ).then(async(userCredential) => {
            console.log(userCredential);
            let response = await updateUser({
                "command":"add_user_to_database",
                "data": {
                  "name":Name,
                    "email":email,
                    "uid":userCredential.user.uid
                }
              });
            setLoading(false);

        }).catch((error) => {
            console.log(error);
            switch(error.message){
                case "Firebase: Error (auth/wrong-password).":
                  setErrorText("Parola gresita!")
                  break;
                case "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
                  setErrorText("Prea multe incercari, incearca mai tarziu!");
                  break;
                case "Firebase: Error (auth/user-not-found).":
                 setErrorText("Utilizatorul nu a fost gasit!");
                 break;
                case "Firebase: Error (auth/email-already-in-use).":
                 setErrorText("Email deja in folosinta!");
                  break;
                default:
                  setErrorText("Parola trebuie sa aiba minim 6 caractere .");
                  console.log(error.message);
                  break;
              }
            setLoading(false);
        });
        console.log(response);
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.top_bar_buttons}>
                <Text style={styles.top_bar_buttons_text} onPress={()=> navigation.navigate('Login')}>Login</Text>
                <Text style={[styles.top_bar_buttons_text,{color:COLORS.accent}]}>Sign up</Text>
            </View>
            <InputField
                label={"Nume"}
                style={styles.input}
                placeholder="Numele tau"
                onChangeText={setName}
                value={Name}
            />
            <InputField
                label={"Email"}
                style={styles.input}
                placeholder="Emailul tau"
                onChangeText={setEmail}
                value={Email}
            />
            <InputField
                label={"Parola"}
                style={styles.input}
                placeholder="O parola de min 6 caractere"
                secureTextEntry={true} 
                onChangeText={setPassword}
                value={Password}
            />
            <Text style={styles.text_error}>{ErrorText}</Text>
            <SimpleButton title="Sign Up" onPress={handleSignup} />
            <Text style={styles.forgot_password_text}>You already have an account? <Text style={styles.forgot_password_text_highlight} onPress={()=>navigation.navigate("Login")}>login</Text></Text>  
        
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

export default SignUpScreen;