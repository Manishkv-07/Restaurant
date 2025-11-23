'use client';
import {useRouter } from 'next/navigation';

export default function Part3(){
 
    const router = useRouter();

    const handleSubmit = () => {
              router.push('/reservation')
    }

    return(
         <div className=" lg:m-20 lg:w-[90%] w-full lg:h-190  bg-gray-700 flex lg:flex-row flex-col rounded-[3rem] ">
               <div className=" flex items-center p-20  ">
                    <div className="hidden lg:flex lg:flex-col  "> 
                        <div className="w-50 h-50 "> 
                             < img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75" /> 
                        </div>
                         <div className="w-50 h-50">
                             < img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75" />
                         </div>

                    </div>
                    <div>
                         <div className="lg:w-80 lg:h-80 ">
                             <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75 " />
                         </div>
                    </div>
               </div>
               <div className=" flex flex-col justify-center  gap-10 ">
                    <div className="" >
                          <div className="flex flex-row">
                              <h1 className="text-xl center text-white">Today Speical Offer</h1>
                             
                          </div>
                    </div>
                     <div className="flex flex-col lg:p-0 text-white ">
                         <h1 className="text-6xl">Explore</h1>
                         <h1 className="text-6xl">Irresistable</h1>
                         <h1 className="text-6xl">Promotion!</h1>
                     </div>
                     <p className="lg:p-0 p-5 text-white">
                        Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.
                     </p>
                     
                     <div className="flex justify-center lg:items-center lg:mb-0 mb-8">
                     <button className="w-40 cursor-pointer hover:border-1 hover:border-white  h-15 text-white bg-red-700 rounded-[2rem] hover:bg-black "
                        onClick={(  handleSubmit  )}
                     >
                         Order Today
                     </button>
                     </div>
               </div>
         </div>
    );
}