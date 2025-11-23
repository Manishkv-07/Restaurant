export default function Part6(){
    return(
          <div>
              <div className = "lg:w-full lg:h-180 h-auto bg-gray-200 text-center flex items-center justify-center flex-col">
                 
                  <div className="lg:p-0 p-10">
                      <h1 className="text-xl text-yellow-400">MASTER CHEFS</h1>
                      <h1 className="text-5xl font-bold">Meet Our Special Chiefs</h1>
                  </div>


                  <div className="flex lg:flex-row flex-col p-15 gap-10 pb-20"> 
                      
                      
                      <div className="relative flex flex-col items-center justify-center"> 
                          <div className="lg:w-80 lg:h-80 rounded-full border-2 flex flex-row items-center justify-center">
                               <div className="p-2 lg:w-70 lg:h-70 hover:w-80 hover:h-80 rounded-full border-1 overflow-hidden">
                                   <img src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600 " />
                               </div>
                          </div>
                        
                          <div className="absolute bottom-[-30px] w-56 p-4 bg-white shadow-xl text-center z-10">
                              <h3 className="text-xl font-bold">Gordon Ramsey</h3>
                              <p className="text-sm text-yellow-400">Head Chef</p>
                          </div>
                      </div>

                 
                      <div className="relative flex flex-col items-center justify-center"> {/* Added relative wrapper */}
                          <div className="lg:w-80 lg:h-80 rounded-full border-2 flex flex-row items-center justify-center">
                               <div className="p-2 lg:w-70 lg:h-70 hover:w-80 hover:h-80 rounded-full border-1 overflow-hidden">
                                   <img src = "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600 " />
                               </div>
                          </div>
                        
                          <div className="absolute bottom-[-30px] w-56 p-4 bg-white shadow-xl text-center z-10">
                              <h3 className="text-xl font-bold">Massimo Bottura</h3>
                              <p className="text-sm text-yellow-400">Sous Chef</p>
                          </div>
                      </div>

                      
                      <div className="relative flex flex-col items-center justify-center"> 
                          <div className="lg:w-80 lg:h-80 rounded-full border-2 flex flex-row items-center justify-center">
                               <div className="p-2 lg:w-70 lg:h-70 hover:w-80 hover:h-80 rounded-full border-1 overflow-hidden">
                                   <img src = "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBjaGVmfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" />
                               </div>
                          </div>
                          
                          <div className="absolute bottom-[-30px] w-56 p-4 bg-white shadow-xl text-center z-10">
                              <h3 className="text-xl font-bold">Hélène Darroze</h3>
                              <p className="text-sm text-yellow-400">Pastry Chef</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
}