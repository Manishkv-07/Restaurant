"use client";
import {useState , useEffect} from 'react';


export default function Menu(){
          
    

     return(
        <div>
              <div className="w-full  p-5 ">
                   <div className=" text-center gap-4 lg:flex lg:flex-col justify-center  items-center">
                        <h1 className="text-xl">
                         Food Menu</h1>
                        <h1 className="text-5xl">Our Special Menu </h1>

                        <div className="lg:w-180 lg:h-30  lg:rounded-[2rem] lg:flex lg:flex-row items-center  gap-4 lg:space-y-0 space-y-5 p-5">
                             <div className="lg:w-40 lg:h-15 hover:bg-red-700 w-[80%] border-1 rounded-[1rem] p-3">
                                  <h1 className="text-black font-bold">Main Dishes</h1>
                             </div>
                             <div className="lg:w-40 lg:h-15 hover:bg-red-700 w-[80%] border-1 rounded-[1rem]  p-3">
                                  <h1 className="text-black font-bold">Desert</h1>
                             </div>
                             <div className="lg:w-40 lg:h-15 hover:bg-red-700 w-[80%] border-1  rounded-[1rem] p-3">
                                  <h1 className="text-black font-bold">Sea Foods</h1>
                             </div>
                              <div className="lg:w-40 lg:h-15 hover:bg-red-700 w-[80%] border-1 hover:text-white rounded-[1rem] p-3">
                                  <h1 className="text-black font-bold  ">Beverage</h1>
                             </div>
                        </div>
                   </div>

                   





                     <div className="flex flex-col ">
                          <div className="lg:p-5 m-4  lg:flex lg:flex-row lg:space-y-0 space-y-5">
                                 <div className="lg:w-100 h-120 border-1 lg:p-5 lg:mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75" />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bold">Braised Chicken Legs</h1>

                                       <div className='flex flex-row text-gray-500 space-x-3'> 
                                        <h1>4 Chicken Legs</h1>
                                        <h1>Chili Sause</h1>
                                        </div> 
                                        
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[90%] h-10 rounded-[3rem] cursor-pointer border-1 hover:bg-red-400">Add to Cart</button>
                                     </div>
                                      
                                 </div> 

                                  <div className="lg:w-100 h-120 border-1 lg:p-5 lg:mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75" />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bold">Bone Steak</h1>
                                        <h1 className='text-gray-500'>4 Chicken Legs</h1>
                                        <h1 className='text-gray-500'>Chili Sause</h1>
                                        <h1 className='text-gray-500'>Soft Drinks</h1>
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[90%] h-10 rounded-[3rem] cursor-pointer  border-1 hover:bg-red-400 ">Add to Cart</button>
                                     </div>
                                      
                                 </div>

                                 <div className="lg:w-100 h-120 border-1 lg:p-5 lg:mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75" />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bold">Fish Chipotle Crema</h1>
                                        <h1 className='text-gray-500'>4 Chicken Legs</h1>
                                        <h1 className='text-gray-500'>Chili Sause</h1>
                                        <h1 className='text-gray-500'>Soft Drinks</h1>
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[93%] h-10 rounded-[3rem] cursor-pointer border-1 hover:bg-red-400">Add to Cart</button>
                                     </div>
                                      
                                 </div>
                          </div>

                          <div className="  lg:p-5 m-4  flex lg:flex-row flex-col lg:space-y-0 space-y-5">
                                 <div className="lg:w-100 h-120 border-1 lg:p-5 lg:mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75" />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bold">Broken & Parmesan</h1>
                                        <h1 className='text-gray-500'>4 Chicken Legs</h1>
                                        <h1 className='text-gray-500'>Chili Sause</h1>
                                        <h1 className='text-gray-500'>Soft Drinks</h1>
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[90%] h-10 rounded-[3rem] cursor-pointer border-1 hover:bg-red-400">Add to Cart</button>
                                     </div>
                                      
                                 </div>

                                 <div className="lg:w-100 h-120 border-1 lg:p-5 lg:mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75" />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bold">Seared Scallops </h1>
                                        <h1 className='text-gray-500'>4 Chicken Legs</h1>
                                        <h1 className='text-gray-500'>Chili Sause</h1>
                                        <h1 className='text-gray-500'>Soft Drinks</h1>
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[90%] h-10 rounded-[3rem] cursor-pointer border-1 hover:bg-red-400 ">Add to Cart</button>
                                     </div>
                                      
                                 </div>

                                 <div className="lg:w-100 h-120 border-1 lg:p-5 lg:mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75" />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bold">Double Mushroom</h1>
                                        <h1 className='text-gray-500'>4 Chicken Legs</h1>
                                        <h1 className='text-gray-500'>Chili Sause</h1>
                                        <h1 className='text-gray-500'>Soft Drinks</h1>
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[93%] h-10 rounded-[3rem] cursor-pointer border-1 hover:bg-red-400">Add to Cart</button>
                                     </div>
                                      
                                 </div>
                          </div> 
                   </div> 
              </div>
        </div>
     )
}




 //  const [cart , setCart] = useState(() => {
     //       if(typeof window !== 'undefined'){
     //           const savedCart = localStorage.getitem('eCommerceCart');
     //           return savedCart ? JSON.parse(savedCart) : [];
     //       }
     //       return [];
     //  });


     // useEffect(() => {
     //       if(typeof window !== 'undefined'){
     //           localStorage.getItem("eCommerceCart" , JSON.stringify(cart) );
     //       }
     // } , [cart])

     // const handleAddToCart = () => {
     //       setCart(prevCart => [...prevCart , ])

     // }

     

     //  const menuDate = [
     //        {
     //           id : 1,
     //           image : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
     //           title : "Braised Chicken Legs",
     //           title1 : "4 Chicken Legs",
     //           title2 : "Chili Sauce", 
     //           title3 : "Soft Drinks",
     //           buttonText : "Add to Cart"
               
               
     //        },

     //        {
     //           id : 2,
     //           image : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
     //           title : "Braised Chicken Legs",
     //           title1 : "4 Chicken Legs",
     //           title2 : "Chili Sauce", 
     //           title3 : "Soft Drinks",
     //           buttonText : "Add to Cart"
               
               
     //        },

     //        {
     //           id : 3,
     //           image : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
     //           title : "Braised Chicken Legs",
     //           title1 : "4 Chicken Legs",
     //           title2 : "Chili Sauce", 
     //           title3 : "Soft Drinks",
     //           buttonText : "Add to Cart"
               
               
     //        },

     //        {
     //           id : 4,
     //           image : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
     //           title : "Braised Chicken Legs",
     //           title1 : "4 Chicken Legs",
     //           title2 : "Chili Sauce", 
     //           title3 : "Soft Drinks",
     //           buttonText : "Add to Cart"
               
               
     //        },

     //        {
     //           id : 5,
     //           image : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
     //           title : "Braised Chicken Legs",
     //           title1 : "4 Chicken Legs",
     //           title2 : "Chili Sauce", 
     //           title3 : "Soft Drinks",
     //           buttonText : "Add to Cart"
               
               
     //        },

     //        {
     //           id : 6,
     //           image : "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
     //           title : "Braised Chicken Legs",
     //           title1 : "4 Chicken Legs",
     //           title2 : "Chili Sauce", 
     //           title3 : "Soft Drinks",
     //           buttonText : "Add to Cart"
               
               
     //        }
     //  ]

      {/* <div className="flex flex-col ">
                         
                          {menuDate.map(menu => {
                              <Card 
                                  key = {menu.id}
                                  image = {menu.image}
                                  title = {menu.title}
                                  title1 = {menu.title1}
                                  title2 = {menu.title2}
                                  title3 = {menu.title3}
 
                              />

                          })}   

                    </div>          */}