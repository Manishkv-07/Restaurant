"use client";

import {useAuth} from '../context/AuthContext';


export default function Book(){
         

            const {phone , per , date, time} = useAuth();

    return(
        <div>
         <div>{phone}</div>
         <div> {per} </div>
         <div> {time} </div>
         <div> {date} </div>
        </div>
    );
}