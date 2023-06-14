'use client'

import BBRating from '@/app/components/BBRating'
import { getHotelById } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import { CheckIcon, HandThumbUpIcon, HeartIcon, PhoneIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ArrowUturnRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


let bed_name = ['Single Bed', 'Double Bed', 'Triple Bed', 'King Bed', 'Queen Bed']

export default function page({ params }: any) {
  const { updateHotelDetails }: any = useSelector((state: any) => state.hotel);
  const dispatch = useAppDispatch();
  console.log(" data::::::::>>>", updateHotelDetails);
  useEffect(() => {
    dispatch(getHotelById(params.id));

  }, [])

  console.log(params)
  const data = updateHotelDetails?.data

  const displayeModeOfPaymnet = (data: any) => {

    let available_mode_payment = new Set()

    data?.map((paymant: any) => available_mode_payment.add(paymant.name))

    let name = (Array.from(available_mode_payment)).toString();
    return name
  }


  return (
    updateHotelDetails?.data ?
      <div className=''>
        <div className='flex flex-col border border-gray-400 mx-3 my-3 rounded-lg'>
          <div className='h-[180px] w-80 mx-3 my-3  flex'>
          <img  src="/image/hotel.jpg"
              alt="image-blur" />
               <img src="/image/hotel2.jpg"
              alt="image-blur" />
            <img src="/image/hotel.jpg"
              alt="image-blur" />
           <img  src="/image/hotel2.jpg"
              alt="image-blur" />
          
          </div>
          <div className='p-1 ml-10 '>
            <div className='flex justify-between'>
              <div className=' flex text-2xl font-bold'>
                <HandThumbUpIcon className="h-7 w-7 mr-2  text-blue-500" />
                <p>{data?.hotelname}</p>
              </div>
              <div className='flex justify-end'>
                <div className='border border-gray-400 rounded-lg bg-gray-300 shadow-md flex ml-5 p-1 '>
                  <p>Hotel</p></div>
                <div className='border border-gray-400 rounded-lg bg-gray-300 shadow-md flex ml-5 p-1 '>
                  <p>Resort</p></div></div>
            </div>
            <BBRating />
            <p>{data?.ownerName}</p>
            <div className='flex'>
              <p className='font-medium'> {data?.adress},{data?.street},{data?.pin} </p>
              {/* <p> Establish In-22/05/2005</p> */}
            </div>
            <p>{data?.email}</p>

            <div className='flex h-8 mt-1 justify-between'>
              <div className='flex'>
                <div className='flex border rounded-md border-gray-400 hover:bg-blue-gray-50 shadow-md p-1 justify-center align-middle '>
                  <PhoneIcon className='h-5 w-6 mr-1' />
                  <a href='tel:7977054812'><p className=''> {data?.contactno} </p></a>
                </div>
                <div className='border border-gray-400  rounded-md hover:bg-blue-gray-50 shadow-md flex ml-5 p-1'>
                  <ShareIcon className='h-6 w-6 ' />
                  <p >share</p>
                </div>
                <div className=' shadow-md  ml-5 w-10 border border-gray-400  rounded-md hover:bg-blue-gray-50 p-1'>
                  <HeartIcon className='h-6 w-6 m-auto' /></div>
              </div>
              <div className=' shadow-md  ml-5 w-60 text-center bg-[#8b5cf6] text-white  rounded-md border border-gray-400  hover:bg-[maroon] p-1'>
                <p>Enquire Now</p>
              </div>

            </div>

          </div>
        </div>

        <div className='flex flex-row'>
          <div className='border border-gray-400  w-[900px] mx-3 my-3 p-5 rounded-lg '>
            <div className='text-xl font-semibold'> Amenities</div>
            <div className='grid grid-cols-4 gap-4 my-3 leading-8'>

              <div >
                <div className=' flex text-l font-semibold mb-3'>
                  <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                  <p> Basic Facilities</p>
                </div>
                {data?.basics.map((element: any, index: any) => (
                  <div className='flex'>
                    <CheckIcon className='h-4 w- mt-2 text-gray-600 mr-1' />
                    <p className='text-truncate' key={index}>{element.name}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className='flex text-l font-semibold mb-3'>
                  <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                  <p>Food Facilities</p>
                </div>
                {data.food.map((food: any, index: any) => (
                  <div className='flex'>
                    <CheckIcon className='h-4 w- mt-2 text-gray-600 mr-1' />
                    <p key={index}>{food.name}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className='flex text-l font-semibold mb-3'>
                  <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                  <p> General Services</p>
                </div>
                {data.generalService.map((general: any, index: any) => (
                  <div className='flex'>
                    <CheckIcon className='h-4 w- mt-2 text-gray-600 mr-1' />
                    <p key={index}>{general.name}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className='flex text-l font-semibold mb-3'>
                  <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                  <p>Safety</p>
                </div>
                {data.safety.map((safety: any, index: any) => (
                  <div className='flex'>
                    <CheckIcon className='h-4 w- mt-2 text-gray-600 mr-1' />
                    <p key={index}>{safety.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div>
              <div className='text-xl font-semibold mt-3'> Available Rooms</div>
              {data?.rooms.map((room: any, index: any) => (
                <div className='p-1 ml-6' key={index}>
                  <p className='font-medium'> Room Type -{bed_name[room.no_of_bed - 1]}</p>
                  <p> Price- {room.price}</p>
                  <p>{room.no_rooms}, Available AC- {room.isAC ? "Yes" : 'No'}</p>

                  <div className='flex justify-between mt-2'>
                    <div>
                      <div className='flex text-l font-semibold mb-3'>
                        <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                        <p>Amenties</p>
                      </div>
                      {room?.amenities.map((amenities: any, index: any) =>
                        <div className='flex'>
                          <CheckIcon className='h-4 w- mt-1 text-gray-600 mr-1' />
                          <p>{amenities.name}</p>
                        </div>
                      )}
                    </div>

                    <div key={index}>
                      <div className='flex text-l font-semibold mb-3'>
                        <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                        <p>View</p>
                      </div>
                      {room?.view.map((view: any, index: any) =>
                        <div className='flex'>
                          <CheckIcon className='h-4 w- mt-1 text-gray-600 mr-1' />
                          <p>{view.name}</p>
                        </div>
                      )}
                    </div>

                    <div key={index}>
                      <div className='flex text-l font-semibold mb-3'>
                        <CheckCircleIcon className='h-6 w-6 mt-1 text-light-green-800 mr-1' />
                        <p> Essential Kit</p>
                      </div>
                      {room?.essentialKit.map((essentialKit: any, index: any) =>
                        <div className='flex'>
                          <CheckIcon className='h-4 w- mt-1 text-gray-600 mr-1' />
                          <p>{essentialKit.name}</p>
                        </div>
                      )}
                    </div>

                  </div>
                  <hr />
                </div>

              ))}
              <p></p>
            </div>
          </div>

          <div className=''>
            <div className='border border-gray-400  w-[400px] mx-3 my-3 p-5 rounded-lg'>
              <div className='text-xl font-semibold'> Address</div>

              <div className='my-3 leading-8'>
                <p> {data?.adress},{data?.street}, </p>
                <p>{data?.country},{data?.city},</p>
                <p>{data?.pin}</p>
                <div className='flex w-44 hover:bg-blue-gray-50 shadow-md p-1  rounded-md mb-2'>
                  <ArrowUturnRightIcon className='h-6 w-6 mt-1 mr-3 ' />
                  <a href={`https://www.google.com/maps/search/?api=1&query=${data.location}`}>Get Direction</a>
                </div>
              </div>
            </div>

            <div className='border border-gray-400  w-[400px] mx-3 my-3 p-5 rounded-lg'>
              <div className='text-xl font-semibold'> Quick Information</div>
              <div >
                <div className='text-gray-500 mt-4'>Mode of Payment</div>
                <div className='mt-2'>
                  {displayeModeOfPaymnet(data?.payment)}
                </div>
              </div>
              <div >
                <div className='text-gray-500 mt-4'>Year of Establishment</div>
                <p className='mt-3'></p>
              </div>
            </div>
          </div>

        </div>
      </div>
      :
      <p>Data Loading...</p>

  )
}
