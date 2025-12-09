'use client';
import Header from './components/Header';
import Part1 from './part1/Part1';
import Part2 from './part2/Part2';
import Part3 from './part3/Part3';
import Menu from './menu/Menu';
import Part5 from './part5/Part5';
import Part6 from './part6/Part6';
import Part7 from './part7/Part7';
import Footer from './components/Footer';

export default function Home(){
   return(
      
        <div className="dark">
     
     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors">
 
  <div className="absolute inset-0">
    <img 
      className='w-full h-full object-cover' 
      src="https://plus.unsplash.com/premium_photo-1661962305366-0c62646fd249?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" 
    />
    
    
    <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
  </div>
  
 
  <div className='fixed top-0 left-0 right-0 z-50'>
    <Header />
  </div>


  <div className='relative z-30 text-center px-4'>
    
   
    <h1 
           className='text-4xl sm:text-6xl md:text-8xl font-bold text-white'
    >
      Best Restaurant
    </h1>

    
   
  </div>
</section>

       < Part1 />
       < Part2 />
       < Part3 />
       < Menu />
       < Part5 />
        < Part6 /> 
       < Part7 />
       < Footer />
      
  </div>
  

      
   );
}

