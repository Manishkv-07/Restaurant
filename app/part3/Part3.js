'use client';
import { useRouter } from 'next/navigation';

export default function Part3(){
  const router = useRouter();
  const handleSubmit = () => { router.push('/reservation') }
  return (
    <div className="w-full lg:m-20 lg:w-[90%] mx-auto bg-[#16213E] dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-200 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
      <div className="flex items-center p-8 lg:p-20 w-full lg:w-1/2">
        <div className="hidden lg:flex lg:flex-col gap-6">
          <div className="w-40 h-40">
            <img className="w-full h-full object-contain" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75" />
          </div>
          <div className="w-40 h-40">
            <img className="w-full h-full object-contain" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75" />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full max-w-sm">
            <img className="w-full h-auto object-contain" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 p-8 lg:p-12 w-full lg:w-1/2 bg-[#16213E] dark:bg-[#141414]">
        <div className="flex items-center gap-3">
          <h1 className="text-sm text-white">Today Special Offer</h1>
        </div>
        <div className="flex flex-col text-white leading-tight">
          <h1 className="text-3xl md:text-6xl font-bold">Explore</h1>
          <h1 className="text-3xl md:text-6xl font-bold">Irresistable</h1>
          <h1 className="text-3xl md:text-6xl font-bold">Promotion!</h1>
        </div>
        <p className="text-sm md:text-base text-gray-200">Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.</p>
        <div className="flex justify-center">
          <button className="w-40 h-12 text-white bg-red-600 hover:bg-red-700 rounded-2xl" onClick={handleSubmit}>Order Today</button>
        </div>
      </div>
    </div>
  );
}
