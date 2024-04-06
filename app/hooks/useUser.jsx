import react, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_APP, FIREBASE_AUTH } from "../../firebaseConfig";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const auth = getAuth(FIREBASE_APP);

const useUser = () => {
    const [User, setUser] = useState(undefined);

    useEffect(() => {

        onAuthStateChanged(FIREBASE_AUTH,(user)=>{
            setUser(user);
            setTimeout(() => {
                if(user!=undefined){
                    getUserData(user);
                }
            }, 1000);

        })
    },[]); 

    const AddUserToDatabase = async (data) =>{
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/add_user`,
            {"id": data.uid, "is_farmer": false, "name": data.name, "email": data.email}
            
        ).catch((error) => {
            console.log("error");
            console.log(error);
        });
        console.log(response);
    }

    const getUserData = async (user) =>{
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_user`,{id:user.uid}).catch((error) => {
                console.log("error");
                console.log(error);
            });
        console.log("user data");
        console.log(response.data);
        setUser({...user,...response.data,});
    }
    startMembership = async (subscription_type) => {
        console.log("here");
        const response = await axios.post(
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/update_user`,{id:User.uid,"subscription_type":subscription_type}).catch((error) => {
                console.log("error");
                console.log(error);
            });
        console.log(response.data);
        getUserData(User);
    }

    const updateUser = async (data) => {
        //console.log(data);
        switch(data.command){
            case "add_user_to_database":
                return await AddUserToDatabase(data.data);
            case "get_user":
                return await getUserData(data.data);
            case "start_membership":
                return await startMembership(data.subscription_type);
            case "cancel_subscription":
                return await startMembership("none");
 
        }
        return null;
    };

    return [User, updateUser];
};

export default useUser;