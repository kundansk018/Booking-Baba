 "use client"
import React from 'react'
// import Link from 'next/link'

export default function page() {
  return (
  
    <div className="justify-center items-center h-screen">
  <div className="bg-white shadow-lg rounded-lg p-6 p-10 md:p-12 lg:p-16 grid place-items-center space-y-6 sm:space-y-8 md:space-y-12">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Admin Dashboard</h1>
   
   
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    <a href="/train" className="bg-train bg-indigo-500 text-white py-3 px-6 rounded-full hover:bg-indigo-600 transition duration-300">Train</a>
    <a href="/bus" className="bg-indigo-500 text-white py-3 px-6 rounded-full hover:bg-indigo-600 transition duration-300">Bus</a>
    <a href="/hotel" className="bg-indigo-500 text-white py-3 px-6 rounded-full hover:bg-indigo-600 transition duration-300">Hotel</a>
  </div>
</div>
  </div>
</div>

  )
}
