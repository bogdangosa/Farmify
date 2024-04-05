import react, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_APP, FIREBASE_AUTH } from "../../firebaseConfig";

const auth = getAuth(FIREBASE_APP);

const useUser = () => {
    const [User, setUser] = useState(undefined);

    useEffect(() => {

        onAuthStateChanged(FIREBASE_AUTH,(user)=>{
            setUser(user);

        })
    },[]); 

    const AddUserToDatabase = async (data) =>{

    }

    const getUserData = async (user) =>{
        
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