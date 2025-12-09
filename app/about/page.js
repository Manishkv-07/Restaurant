import Header from '../components/Header';
import Footer from '../components/Footer';
import Part7 from '../part7/Part7';
import Part6 from '../part6/Part6';


export default function Chef(){
     return(
         <div>
                <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                            
                                 
                                  <div className="absolute inset-0">
                                    <img 
                                      className='w-full h-full object-cover' 
                                     src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" 
                                      
                                    />
                                   
                                    <div className="absolute inset-0 bg-black/60"></div>
                                  </div>
                                     <div className='fixed top-0 left-0 right-0 z-50'>
                                    <Header />
                                       </div>
                            
                                
                                  <div className='relative z-30 text-center px-4'>
                                    <h1 
                                           className=' text-6xl md:text-8xl  font-bold text-white'
                                    >
                                      chef 
                                    </h1>
                          
                                  </div>
                                </section>

                                

                                 < Part6 />
                                 < Part7 />
                                < Footer />
                    </div> 
            
        
     )
}