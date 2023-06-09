'use client'
import BBRating from '@/app/components/BBRating'
import { getHotels } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function UserHotelPage() {
    const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);


    const dispatch = useAppDispatch();
    console.log(" using usestate hotel data is ..", hotelData);
    useEffect(() => {
        dispatch(getHotels());

    }, [])
    debugger
    const router = useRouter()


    const displayeAmenities = (rooms: any) => {

        let available_amenities = new Set()
        rooms.map((room: any) => {
            room?.amenities?.map((amenity: any) => available_amenities.add(amenity.name)) //["tv","doctor avail"]   
        })

        let name = (Array.from(available_amenities)).toString();
        return name
    }


    const displayeView = (rooms: any) => {
        let available_view = new Set()
        rooms.map((room: any) => {
            room?.view?.map((item: any) => available_view.add(item.name)) //["tv","doctor avail"]   
        })
        let name = (Array.from(available_view)).toString();
        return name
    }


    return (
        <div>

            <div className=' flex flex-row bg-white mx-3'>
                <div>
                    {hotelData
                        ? hotelData?.map((element: any, index: any) => (<div className=' flex flex-row bg-white mx-3'>
                            <div className='flex flex-row border border-gray-400  mt-4 p-5 rounded-lg'
                                onClick={() => router.push('/user/hotels/hotelsDetail/' + element._id)}>

                                <div>
                                    <img className='h-[180px] mx-3 my-3  hover:opacity-80'
                                        src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                        alt="img-blur-shadow" />
                                </div>
                                <div className='mx-5 my-3 '>
                                    <h1 className='text-2xl'>{element.hotelname}</h1>
                                    <p>Owner:{element.ownerName}</p>
                                    <BBRating />
                                    <p>{element.adress} {element.street}</p>
                                    <p> ₹ 1000 to  ₹ 1800 </p>
                                    {/* <p> VIP room facility, CCTV,Docors on call,Dail Houskeeping ...</p> */}

                                    <div>



                                        {displayeAmenities(element?.rooms)}



                                        {/* {element?.rooms&&element?.rooms?.map((room: any) =>
                                        <>
                                        <p>Room No.{room.id}</p>
                                   
                                        </>)} */}
                                    </div>
                                    <p className='text-cyan-500'>{displayeView(element.rooms)}</p>

                                    <p>Excellent place for Families and business travellers! Great Budget hotel,Rooms are neat and hygienic</p>
                                    <p>contact :{element.contactno}</p>
                                </div>
                            </div>

                        </div>
                        ))
                        : "Data Not Found.."}
                </div>
                <div className='border border-gray-400  mt-4 ml-5 w-[200px] bg-orange-600 rounded-lg'>
                    byujdgfurh
                </div>
            </div>




        </div>

    )
}
