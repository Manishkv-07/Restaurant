"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Part1(){
  const { booking } = useAuth();
  const [phone, setPhone] = useState('');
  const [per, setPer] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();

  return (
    <div className="w-full px-4 py-10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-200">
      <div className="flex lg:flex-row flex-col mt-10 gap-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-[#141414] rounded-2xl border border-gray-200 dark:border-[#2A2A2A] shadow-2xl p-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Book Table</h1>
              <input className="w-full h-10 bg-gray-100 dark:bg-[#0B0B0B] dark:text-gray-200 rounded-lg px-3" placeholder="phone" type="tel" onChange={(e)=>setPhone(e.target.value)} />
              <input className="w-full h-10 bg-gray-100 dark:bg-[#0B0B0B] dark:text-gray-200 rounded-lg px-3" placeholder="No of person" onChange={(e)=>setPer(e.target.value)} />
              <input className="w-full h-10 bg-gray-100 dark:bg-[#0B0B0B] dark:text-gray-200 rounded-lg px-3" placeholder="Date" type="date" onChange={(e)=>setDate(e.target.value)} />
              <input className="w-full h-10 bg-gray-100 dark:bg-[#0B0B0B] dark:text-gray-200 rounded-lg px-3" placeholder="time" type="time" onChange={(e)=>setTime(e.target.value)} />
              <button className="w-40 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg mt-2" type="submit" onClick={()=>{
                booking(phone, per, date, time);
                router.push('/bookTable');
              }}>Book a Table</button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 p-2">
          <div className="w-full">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">Our Popular category</h1>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-full sm:w-1/3 h-48 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" />
              </div>
              <div className="w-full sm:w-1/3 h-48 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550367363-ea12860cc124?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" />
              </div>
              <div className="w-full sm:w-1/3 h-48 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
