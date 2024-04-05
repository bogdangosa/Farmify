
import React,{useContext , useState, useEffect } from "react";
import useUser from "../hooks/useUser";

const UserContext  = React.createContext();
const UserUpdateContext  = React.createContext();

export function useUserContext(){
    return useContext(UserContext);

}export function useUserUpdateContext(){
    return useContext(UserUpdateContext);
}

export function UserProvider({children}){
    const [User,setUser] = useUser();

    const updateUser = async (data)=>{
        return await setUser(data)
    }


    return(
        <UserContext.Provider value={User}>
            <UserUpdateContext.Provider value={updateUser}>
                    {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>

    )
}
