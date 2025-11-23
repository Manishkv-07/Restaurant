'use client';
import {useRouter } from 'next/navigation';


export default function Footer(){
       
    const router = useRouter();
    const handleSubmit = () => {
         router.push('/about');
    }

     return(
              <div>
                 <div className="w-full h-auto flex lg:flex-row flex-col bg-gray-800 gap-10  lg:items-center justify-center p-10">
                        <div className="w-50 text-gray-300 space-y-8">
                              <h1 className="text-white text-3xl">About Us</h1>
                              <div className="">
                                   <p>Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</p>
                              </div>
                        </div>

                        <div className= " w-50 text-gray-300 space-y-5">
                            <h1  className="text-white text-3xl">Explore</h1>
                                
                                <div className="flex flex-col cursor-pointer">
                                    <a onClick = {handleSubmit} >Company Profile</a>
                                    <a onClick = {handleSubmit}>About</a>
                                    <a>Help Center</a>
                                    <a>Career</a>
                                    <a>Features</a>
                                    <a >contact</a>
                                </div>

                        </div>

                        <div className=" w-50 text-gray-300 space-y-10">
                             <h1  className="text-white text-3xl">Contact Info</h1>

                              <h1>175 10h Street, Office 375 Berlin, De 21562</h1>
                              <h1>+123 34598768</h1>
                        </div>

                        <div className=" w-50 text-gray-300 space-y-20">
                            <h1  className="text-white text-3xl" >Newsletter</h1>

                            <div>
                                <p>Join our subscribers list to get the latest news and special offers.</p>
                            </div>
                        </div>
                 </div>
                  
                   <footer className="flex lg:justify-between flex-col items-center bg-black ">
                         <div className=" w-30 h-30 flex items-center lg:m-4">
                               <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" />
                         </div>

                         <h1 className="text-white lg:m-4">
                             © Copyright 2025. Restan. All Rights Reserved
                         </h1>
                   </footer>

                   
            </div>
     )
}