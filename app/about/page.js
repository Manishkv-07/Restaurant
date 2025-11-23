import Header from '../components/Header';
import Footer from '../components/Footer';
import Part7 from '../part7/Part7';
import Part6 from '../part6/Part6';


export default function Chef(){
     return(
         <div>
             <div className="relative w-full  shadow-xl overflow-hidden m:mt-30">
                                  <img className='w-full h-screen object-cover' src = "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" />
                             
                                   <div className='fixed top-0 z-30 '>
                                         < Header />
                                   </div>
                        
                                   <div className='absolute inset-0 flex items-center justify-center z-20'>
                                       <h1 className='text-white lg:text-[100px] text-4xl'>About Us</h1>
                                   </div>
                        
                                 </div>  
                                 < Part6 />
                                 < Part7 />
                                < Footer />
                    </div> 
            
        
     )
}