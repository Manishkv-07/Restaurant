'use client';
import { createContext , useContext , useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>  {
               const [ phone , setPhone] = useState('');
               const [ per , setPer] = useState('');
               const [ date , setDate] = useState('');
               const  [time , setTime] = useState('');

        //    const booking = (phone , per , date , time) => {
        //         setPhone(phone);
        //         setPer(per);
        //         setDate(date);
        //         setTime(time);
        //    } ;

        const booking = (newPhone , newPer , newDate , newTime) => {
        setPhone(newPhone);
        setPer(newPer);
        setDate(newDate);
        setTime(newTime);
        console.log("Booking context updated:", { newPhone, newPer, newDate, newTime });
    } ;
    
    // FIX: Include the 'booking' function in the value object.
    const contextValue = {
        phone, 
        per, 
        date, 
        time,
        booking, // <-- CRUCIAL FIX: Exposing the function to consumers
    };
           
           return(
               < AuthContext.Provider
                  value = {contextValue}
               >
                
                  {children}
               </AuthContext.Provider>
           )
}

export const useAuth = () => {
     return useContext(AuthContext);
}