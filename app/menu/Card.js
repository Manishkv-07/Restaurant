import React from 'react';

const Card = (props) =>{
 
    return(
            <div>
                   


                    <div className="flex flex-col ">
                          <div className="p-5 m-4  flex flex-row">
                                 <div className="w-100 h-120 border-1 p-5 mr-4 rounded-[1rem]">
                                    <div className="h-[60%] object-fit overflow-hidden">
                                         <img className="rounded-[1rem]" src={props.image} />
                                    </div>
                                    <div className="p-4">
                                        <h1 className="text-3xl font-bolc">{props.title}</h1>
                                        <h1>{props.title1}</h1>
                                        <h1>{props.title2}</h1>
                                        <h1>{props.title3}</h1>
                                    </div>
                                     <div className=" flex items-center  justify-center">
                                        <button className="w-[90%] h-10 rounded-[3rem]  border-1 hover:bg-red-400"
                                          onClick = {props.on}
                                        >{props.buttonText}</button>
                                     </div>
                                      
                                 </div>

                                
                          </div>
                   </div>
              </div>
    
    )

}

export default Card;
