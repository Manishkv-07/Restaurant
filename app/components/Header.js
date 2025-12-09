'use client';
import React from 'react';
import {useRouter } from 'next/navigation';

export default function Header(){
      const router = useRouter();
      
      const toAbout = () => {
           router.push('/about');
      }

      const returnToMenu = () => {
           router.push('/');
      }
      const handleSubmit = () => {
            router.push('/reservation');
      }

     return(
         <div >
             <nav className=' w-120 lg:w-[120%] bg-red-800 p-3 flex items-center justify-between  '> 
               <div>
                     <h1 className='text-white' >envatomarket</h1>
                     <div className='lg:hidden'> 
                        <a  className='hover:text-red-900'
                           onClick={returnToMenu}
                         >Home</a>

                     </div>
               </div>
                   
                
             
                 
             </nav>

              <div className=' w-[120%] hidden  h-[100px] bg-gray-900 p-4 sm:flex'>
                    <div className='ml-10 cursor-pointer  flex items-center p-4 space-x-10 text-white text-xl'>
                         <a className='hidden'>Home</a>
                         <a  className='hover:text-red-900'
                           onClick={returnToMenu}
                         >Home</a>
                         <a
                          className='hover:text-red-900'
                          onClick={handleSubmit}
                         >Menu</a>
                    </div>
                    <div className='-flex lg:ml-60 items-center w-30 h-30'>
                           <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" />
                    </div>
                    <div className='ml-10 cursor-pointer flex items-center p-4 space-x-10 text-white text-xl ml-40'>
                         <a
                          className='hover:text-red-900'
                         >Blog</a>
                         <a
                           className='hover:text-red-900'
                         >Shop</a>
                         <a
                           onClick={toAbout}
                           className='hover:text-red-900'
                         >About Us</a>
                    </div>
              </div>
         </div>
     )
}