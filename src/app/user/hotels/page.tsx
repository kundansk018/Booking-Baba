'use client'
import BBButton from '@/app/components/BBButton';
import BBDate from '@/app/components/BBDate';
import BBDropdown from '@/app/components/BBDropdown';
import BBInput from '@/app/components/BBInput';
import BBRating from '@/app/components/BBRating'
import BBSearch from '@/app/components/BBSearch';
import { getHotels, searchHotelByName, sortHotel } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function UserHotelPage() {
    const [searchKey, setSearchKey] = useState("")
    const [name, setName] = useState("")
    const [no, setNo] = useState("")
    const [uemail, setUEmail] = useState("")
    const [sort, setSort] = useState("")

    const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
    const dispatch = useAppDispatch();
    console.log(" using usestate hotel data is ..", hotelData);
    useEffect(() => {
        dispatch(getHotels());

    }, [])

    const router = useRouter()


    const displayeAmenities = (rooms: any) => {

        let available_amenities = new Set()
        rooms?.map((room: any) => {
            room?.amenities?.map((amenity: any) => available_amenities?.add(amenity.name)) 
        })

        let name = (Array.from(available_amenities)).toString();
        return name
    }


    const displayeView = (rooms: any) => {
        let available_view = new Set()
        rooms?.map((room: any) => {
            room?.view?.map((item: any) => available_view.add(item.name)) 
        })
        let name = (Array.from(available_view)).toString();
        return name
    }

    const searchByName = (searchKey: any) => {

        dispatch(searchHotelByName(searchKey));
    }

    useEffect(() => {
        if (searchKey == "") {
            dispatch(getHotels());
        }


    }, [searchKey])




    const datasort = [
        { label: "No Sort", value: "Select" },
        { label: "Low to High", value: "Low to High" },
        { label: "High to Low", value: "Low to High" },

    ]

    useEffect(() => {
        if (sort == "Select") {
            dispatch(getHotels());
        }
        dispatch(sortHotel(sort));
    }, [sort])

    return (
        hotelData ?
            <div>
                <div>
                    <div className='h-[180px]   my-5  border border-gray-500 flex'>
                        <img src="/image/hotel.jpg"
                            alt="image-blur" />
                        <img src="/image/hotel1.jpg"
                            alt="image-blur" />
                        <img src="/image/hotel2.jpg"
                            alt="image-blur" />
                        <img src="/image/hotel.jpg"
                            alt="image-blur" />
                        <img src="/image/hotel1.jpg"
                            alt="image-blur" />
                    </div>
                </div>

                <div className='flex justify-between p-3'>
                    <div className='ml-5 '>
                        <BBDropdown
                            label='Sort By'
                            value={sort}
                            options={datasort}
                            onPress={(value) => {
                                setSort(value)
                            }} />
                    </div>
                    <div >
                        <BBDate/>
                    </div>

                    <div className='flex justify-end '>
                        <div className='mr-2'>
                            <BBInput label='Select Location' value='pune' onChange={(e) => { }} />
                        </div>
                        <div className='w-[600px]  '>

                            <BBInput type='search' label='Search ..' value={searchKey}
                                onChange={(e) => { setSearchKey(e.target.value) }} />
                        </div>
                        <div className=''>
                            <Button type='button' className='hover- border rounded-lg 
                    bg-[#8075f5] border-gray-500  ml-2 h-10 w-[70px]'
                                onClick={() => searchByName(searchKey)}>
                                Search</Button>
                        </div>

                    </div>
                </div>

                <div className=' flex flex-row bg-white mx-3'>
                    <div>
                        {hotelData?.map((element: any, index: any) => (
                            <div className=' flex flex-row bg-white mx-3'>
                                <div className='flex flex-row border border-gray-400  mt-4 p-5 rounded-lg'
                                    onClick={() => router.push('/user/hotels/hotelsDetail/' + element._id)}>

                                    <div>
                                        <img className='h-[180px] mx-3 my-3  hover:opacity-80'
                                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                            alt="img-blur-shadow" />
                                    </div>
                                    <div className='mx-5 my-3 '>
                                        <h1 className='text-2xl'>{element.hotelname}</h1>
                                        <p>Owner:{element.ownerName}</p>
                                        <BBRating />
                                        <p>{element.adress} {element.street}</p>
                                        <p>Min Price- {element.min_order_price}</p>
                                        {/* <p> VIP room facility, CCTV,Docors on call,Dail Houskeeping ...</p> */}
                                        <div>
                                            {displayeAmenities(element?.rooms)}
                                        </div>
                                        <p className='text-cyan-500'>{displayeView(element.rooms)}</p>

                                        <p>Excellent place for Families and business travellers! Great Budget hotel,Rooms are neat and hygienic</p>
                                        <p>contact :{element.contactno}</p>
                                    </div>
                                </div>

                            </div>
                        ))
                        }
                    </div>
                    <div>
                        <div className=' border border-gray-400  mt-4 ml-4 w-[320px]  rounded-lg'>
                            <div className='text-center mt-3 text-xl'>  Are you looking for?</div>

                            <div className='mx-5'>
                                <BBInput containerProps={{ className: "mb-4 mt-3" }}
                                    type='text' value={name} label='Name' onChange={(e) => setName(e.target.value)} />
                                <BBInput containerProps={{ className: "mb-4" }}
                                    type='number' value={no} label='Mobile Number' onChange={(e) => setNo(e.target.value)} />
                                <BBInput containerProps={{ className: "mb-4" }}
                                    type='email' value={uemail} label='Email ID' onChange={(e) => setUEmail(e.target.value)} />
                                <Button type='button' className='border border-gray-500 text-center w-[280px] h-9 rounded-lg bg-[#8075f5] mb-5'>Get Best Deal</Button>
                            </div>
                        </div>

                        <div className='border border-gray-400  mt-4 ml-4 w-[320px]  rounded-lg'>
                            <div className='ml-4'>
                                <p className='mb-2'>All Option</p>
                                <p className='mb-1'> 1 Star Hotels</p>
                                <p className='mb-1'> 2 Star Hotels</p>
                                <p className='mb-1'> 3 Star Hotels</p>
                                <p className='mb-1'> 4 Star Hotels</p>
                                <p className='mb-1'> 5 Star Hotels</p>
                                <p className='mb-1'> Rs 500 & Below</p>
                                <p className='mb-1'> Rs 501 To Rs 1000</p>
                                <p className='mb-1'> Rs 1001 To Rs 2000</p>
                                <p className='mb-1'>Rs 2001 To Rs 3000</p>
                                <p className='mb-5'> Rs 3500 To Rs 4000</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            :
            <p>Data Not Found...</p>

    )
}
