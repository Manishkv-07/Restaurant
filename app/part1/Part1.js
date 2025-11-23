"use client";
import React  from "react";
import {useState } from "react";
import { useRouter} from 'next/navigation';
import {useAuth} from '../context/AuthContext';

export default function Part1(){
 
     const {booking} = useAuth();
      
     const [ phone , setPhone] = useState('');
     const [ per , setPer] = useState('');
     const [ date , setDate] = useState('');
     const  [time , setTime] = useState('');

     const router = useRouter();
      



    return(
           <div className="flex ">
                 <div className="flex lg:flex-row flex-col mt-10  ">
                    

                     <div className=" lg:ml-30 sm:flex sm:items-center sm:justify-center  w-96 h-100  shadow-2xl  rounded-[30px] border-1      ">
                            <div className="flex  flex-col p-10 gap-5">
                                <h1 className="text-2xl">Book Table</h1>

                                <input className="w-70 h-10 bg-white border-1 rounded-[1rem]"
                                     placeholder="  phone"
                                     type="tel"
                                     onChange = {(event) =>  {
                                        setPhone(event.target.value);
                                     }}
                                />

                                 <input className="w-70 h-10 bg-white border-1 rounded-[1rem]"
                                     placeholder="  No of person"
                                     onChange = {(event) => {
                                         setPer(event.target.value);
                                     }}
                                />
                                    
                                 <input className="w-70 h-10 bg-white border-1 rounded-[1rem]"
                                     placeholder="  Date"
                                     type="date"
                                     onChange = {(event) => {
                                        setDate(event.target.value);
                                     }}
                                />

                                 <input className="w-70 h-10 bg-white border-1 rounded-[1rem]"
                                     placeholder="  time"
                                     type = "time"
                                     onChange = {(event) => {
                                        setTime(event.target.value);
                                     }}
                                />

                                 <button className="w-40 h-10  bg-red-400 rounded-[1rem]" 
                                    type = "submit"
                                    onClick = {(event) => {
                                         console.log(phone ,per , date , time);
                                     
                                        // localStorage.getItem('phoneValue' , setPhone);
                                        // localStorage.getItem('perValue' , setPer );
                                        // localStorage.getItem('dateValue', setDate);
                                        // localStorage.getItem('timeValue' , setTime);

                                      booking(phone , per , date , time);
                              // here router push need to be added
                                       router.push('/bookTable')
                                    }}
                                 >
                                     Book a Table
                                 </button>
                            </div>
                     </div>
                       {/* // category */}
                    
                     <div className="p-10">
                           <div className="w-170 h-auto ">
                                <div className="">
                                     <h1 className="lg:text-6xl text-3xl">Our Popular category</h1>
                                </div>
                                <div className="flex p-3 gap-5 lg:flex-row flex-col shadow-4xl">
                                     <div className="w-45 h-60 bg-red-500 rounded-[2rem] overflow-hidden">
                                             <img 
                                              className="object-cover"
                                             src = "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlLWNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600 " />
                                     </div>
                                     <div className="w-45 h-60 bg-red-500 rounded-[2rem] overflow-hidden">
                                             <img 
                                              className="object-cover"
                                             src = " https://images.unsplash.com/photo-1550367363-ea12860cc124?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" />
                                     </div>
                                     <div className="w-45 h-60 bg-red-500 rounded-[2rem] overflow-hidden">
                                             <img 
                                              className="object-cover"
                                             src = "https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" />
                                     </div>
                                </div>
                           </div>
                     </div>
                 </div>
           </div>
    )
}