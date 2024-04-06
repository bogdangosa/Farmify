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
            `${process.env.EXPO_PUBLIC_SERVER_ADRESS}/api/get_user_data`,{id:user.uid}).catch((error) => {
                console.log("error");
                console.log(error);
            });
        console.log(response.data);
    }
    const updateUser = async (data) => {
        //console.log(data);
        switch(data.command){
            case "add_user_to_database":
                return await AddUserToDatabase(data.data);
            case "get_user":
                return await getUserData(data.data);
 
        }
        return null;
    };

    return [User, updateUser];
};

export default useUser;