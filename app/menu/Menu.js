"use client";
import { useState, useEffect } from 'react';

export default function Menu(){
  return (
    <div className="w-full p-5 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-200">
      <div className="text-center gap-4 flex flex-col items-center">
        <h1 className="text-xl">Food Menu</h1>
        <h1 className="text-3xl md:text-5xl font-bold">Our Special Menu</h1>

        <div className="w-full max-w-4xl mt-4 rounded-2xl flex flex-wrap gap-4 p-4 justify-center">
          <div className="w-full sm:w-40 rounded-[1rem] p-3 text-center transition bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#2A2A2A] hover:bg-red-700 hover:text-white">
            <h1 className="font-bold">Main Dishes</h1>
          </div>
          <div className="w-full sm:w-40 rounded-[1rem] p-3 text-center transition bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#2A2A2A] hover:bg-red-700 hover:text-white">
            <h1 className="font-bold">Desert</h1>
          </div>
          <div className="w-full sm:w-40 rounded-[1rem] p-3 text-center transition bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#2A2A2A] hover:bg-red-700 hover:text-white">
            <h1 className="font-bold">Sea Foods</h1>
          </div>
          <div className="w-full sm:w-40 rounded-[1rem] p-3 text-center transition bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#2A2A2A] hover:bg-red-700 hover:text-white">
            <h1 className="font-bold">Beverage</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="lg:p-5 m-4 lg:flex lg:flex-row flex-col gap-5">
          <div className="lg:w-1/3 w-full border rounded-[1rem] bg-white dark:bg-[#141414] border-gray-200 dark:border-[#2A2A2A] p-4">
            <div className="h-48 overflow-hidden">
              <img className="rounded-[1rem] w-full h-full object-cover" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75" />
            </div>
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Braised Chicken Legs</h1>
              <div className='flex flex-row text-gray-500 dark:text-gray-300 gap-3'>
                <h1>4 Chicken Legs</h1>
                <h1>Chili Sauce</h1>
              </div>
            </div>
            <div className="flex items-center justify-center pb-4">
              <button className="w-[90%] h-10 rounded-full border border-gray-300 dark:border-[#2A2A2A] hover:bg-red-500 transition">Add to Cart</button>
            </div>
          </div>

          <div className="lg:w-1/3 w-full border rounded-[1rem] bg-white dark:bg-[#141414] border-gray-200 dark:border-[#2A2A2A] p-4">
            <div className="h-48 overflow-hidden">
              <img className="rounded-[1rem] w-full h-full object-cover" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75" />
            </div>
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Bone Steak</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>4 Chicken Legs</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Chili Sauce</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Soft Drinks</h1>
            </div>
            <div className="flex items-center justify-center pb-4">
              <button className="w-[90%] h-10 rounded-full border border-gray-300 dark:border-[#2A2A2A] hover:bg-red-500 transition">Add to Cart</button>
            </div>
          </div>

          <div className="lg:w-1/3 w-full border rounded-[1rem] bg-white dark:bg-[#141414] border-gray-200 dark:border-[#2A2A2A] p-4">
            <div className="h-48 overflow-hidden">
              <img className="rounded-[1rem] w-full h-full object-cover" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75" />
            </div>
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Fish Chipotle Crema</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>4 Chicken Legs</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Chili Sauce</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Soft Drinks</h1>
            </div>
            <div className="flex items-center justify-center pb-4">
              <button className="w-[90%] h-10 rounded-full border border-gray-300 dark:border-[#2A2A2A] hover:bg-red-500 transition">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="lg:p-5 m-4 flex lg:flex-row flex-col gap-5">
          <div className="lg:w-1/3 w-full border rounded-[1rem] bg-white dark:bg-[#141414] border-gray-200 dark:border-[#2A2A2A] p-4">
            <div className="h-48 overflow-hidden">
              <img className="rounded-[1rem] w-full h-full object-cover" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75" />
            </div>
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Broken & Parmesan</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>4 Chicken Legs</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Chili Sauce</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Soft Drinks</h1>
            </div>
            <div className="flex items-center justify-center pb-4">
              <button className="w-[90%] h-10 rounded-full border border-gray-300 dark:border-[#2A2A2A] hover:bg-red-500 transition">Add to Cart</button>
            </div>
          </div>

          <div className="lg:w-1/3 w-full border rounded-[1rem] bg-white dark:bg-[#141414] border-gray-200 dark:border-[#2A2A2A] p-4">
            <div className="h-48 overflow-hidden">
              <img className="rounded-[1rem] w-full h-full object-cover" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75" />
            </div>
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Seared Scallops</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>4 Chicken Legs</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Chili Sauce</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Soft Drinks</h1>
            </div>
            <div className="flex items-center justify-center pb-4">
              <button className="w-[90%] h-10 rounded-full border border-gray-300 dark:border-[#2A2A2A] hover:bg-red-500 transition">Add to Cart</button>
            </div>
          </div>

          <div className="lg:w-1/3 w-full border rounded-[1rem] bg-white dark:bg-[#141414] border-gray-200 dark:border-[#2A2A2A] p-4">
            <div className="h-48 overflow-hidden">
              <img className="rounded-[1rem] w-full h-full object-cover" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75" />
            </div>
            <div className="p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Double Mushroom</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>4 Chicken Legs</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Chili Sauce</h1>
              <h1 className='text-gray-500 dark:text-gray-300'>Soft Drinks</h1>
            </div>
            <div className="flex items-center justify-center pb-4">
              <button className="w-[90%] h-10 rounded-full border border-gray-300 dark:border-[#2A2A2A] hover:bg-red-500 transition">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
