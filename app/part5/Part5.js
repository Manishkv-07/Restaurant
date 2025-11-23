

export default function Part5(){
  
     function handleToapple(){
         window.location.href = "https://www.apple.com/app-store/"
     }

     function handleToplay(){
         window.location.href = "https://play.google.com/store/games?device=windows"
     }
     
    return(
       <div className=" lg:m-20  lg:w-[90%] w-full lg:h-190 bg-gray-700 flex lg:flex-row flex-col rounded-[3rem] ">
               <div className=" lg:flex lg:items-center lg:p-20  ">
                    <div className="p-5 flex items-center justify-center" > 
                        <div className="lg:w-80 w-70 lg:h-80"> 
                             < img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" /> 
                        </div>
                        

                    </div>
                  
               </div>
               <div className="flex flex-col justify-center gap-10 ">
                    <div >
                          <div className="p-5 font-bold text-white">
                              <h1 className="text-6xl">Are you Ready to Start your online Order?</h1>
                              
                          </div>
                    </div>
                    
                     <p className="text-white p-5">
                       Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                     </p>
                     <div className="lg:space-x-5 flex lg:flex-row flex-col items-center gap-5 lg:p-0 p-4">
                     <button className="w-40 h-15 cursor-pointer  bg-white hover:bg-black hover:text-white hover:border-1 hover:border-white rounded-[2rem] hover:bg-black "
                          onClick={handleToapple}
                            
                           >
                         App Store
                     </button>

                     <button className="w-40 h-15 cursor-pointer text-white bg-red-700 rounded-[2rem] hover:bg-black "
                        onClick={handleToplay}
                     >
                         Play Store
                     </button>
                     </div>
               </div>
         </div>
    )
}