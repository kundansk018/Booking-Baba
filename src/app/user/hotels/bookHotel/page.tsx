'use client'

import BBInput from '@/app/components/BBInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import HomeSearch from '@/components/HomeSearch'

import { DatePicker } from 'antd'


export default function page() {

    return (

        <div>
            <div className='flex flex-row gap-5' >
                <div className='bg-white w-[900px] mx-3 my-3 p-5 rounded-lg h-full'>
                    <div className='text-2xl text-[#0c2f54] border-b border-gray-300 pb-3 font-medium  mt-3'>
                        Confirm Hotels Details </div>
                    <div className=' flex flex-row w-[100%] border-b border-gray-300 '>
                        <div>
                            <img
                                className="h-[140px] W-[170PX] mx-3 my-3 p-2  rounded-lg hover:opacity-80"
                                src="/image/hotel6.jpg"
                                alt="img-blur-shadow" />
                        </div>
                        <div className='p-3'>
                            <p className='text-2xl text-[#0c2f54] font-medium  mt-3'> The Orchid Hotel</p>
                            <p className='flex mt-2'> <IoLocationSharp className='mt-1 mr-1' />Ashram Road, Ahmedabad, Gujarat, India. </p>
                            <div className='flex flex-row mt-1'>
                                <p className='flex flex-row'> <FaHome className='mt-1 mr-1' /> Deluxe Room</p>
                                <p className='flex flex-row ml-3'> <BsFillPersonFill className='mt-1 mr-1' /> 3 Guests</p>
                            </div>

                        </div>

                    </div>
                    <div className=' grid grid-cols-4 w-[100%] border-b border-gray-300 mt-5 ' >
                        <div>
                            <p>Check In</p>
                            <div className='mt-2 mb-8'>
                            <DatePicker  placeholder="CheckIn date" onChange={()=>{}} 
                            className='border border-gray-600 w-44 h-14 '/>
                            </div>
                           
                        </div>
                        <div>
                            <p>Check Out</p>
                            <div className='mt-2 mb-8'>
                            <DatePicker  placeholder="CheckOut date" onChange={()=>{}} 
                            className='border border-gray-500 w-44 h-14 '/>
                            </div>

                        </div>
                        <div>
                            <p>Rooms & Guests</p>
                        </div>
                        <div>
                            <p>update</p>
                        </div>
                    </div>

                </div>
                <div className='bg-white w-[400px] mx-3 my-3 p-5 rounded-lg'>
                    <div className='text-2xl text-[#0c2f54] border-b border-gray-300 pb-3  font-medium  mt-3'>
                        Invoice Details </div>
                    <div className=' mt-3'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-gray-700'>Base price</p>
                                <p className='text-gray-400'>For 1 Night, 1 Room, 3 Guests</p>
                            </div>
                            <div className='flex text-xl'><BiRupee className='mt-1' /> <p>1000</p></div>
                        </div>

                        <div className='flex flex-row justify-between mt-3'>
                            <div className='flex flex-col'>
                                <p className='text-gray-700'>Extra Guests Cost</p>
                                <p className='text-gray-400'>For 1 Night, 1 Guests</p>
                            </div>
                            <div className='flex text-xl' > <BiRupee className='mt-1'/><p className='text-xl'>300</p></div>
                        </div>
                        <div className='flex flex-row justify-between mt-3'>
                            <p className='text-gray-700'>Taxes & Fees</p>
                            <div className='flex text-xl'> <BiRupee className='mt-1'/> <p className='text-xl'>200</p></div>
                          </div>
                          <div className='flex flex-row justify-between  border border-gray-300 bg-gray-300 p-2 mt-5'>
                            <p className=' text-xl '>Total Amount</p>
                            <div className='flex text-xl'> <BiRupee className='mt-1'/> <p className='text-xl'>1500</p></div>
                          </div>
                          <div className='flex mt-3 justify-center p-2'>
                          <Button type='submit' className=' border rounded-md
                     bg-[#0071cc] text-white w-[300px] h-12 ml-2 '
                        onClick={() => { }}> Proceed To Payment</Button>
                          </div>
                        
                       </div>
                </div>
            </div>

        </div>

    )
}
