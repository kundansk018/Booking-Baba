'use client'
import '../../hotel.css';
import BBDropdown from '@/app/components/BBDropdown';
import BBInput from '@/app/components/BBInput';
import BBRating from '@/app/components/BBRating'
import { getHotelById, saveSelectedRoomData } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import { CheckIcon, HandThumbUpIcon, HeartIcon, PhoneIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ArrowUturnRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Option, Radio, Select } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { BiCctv, BiRupee, BiSpa, BiSwim, BiWifi } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';

import { IoBusinessSharp, IoChatbubblesOutline } from 'react-icons/io5';
import { RiRestaurantFill } from 'react-icons/ri';

import { useSelector } from 'react-redux';
import UDatePicker from '@/components/userComponents/UDatePicker';
import { FaBed, FaCheck, FaGlassMartiniAlt } from 'react-icons/Fa';
import Accordion from '@/components/userComponents/UCounter';
import moment from 'moment';
import BBButton from '@/app/components/BBButton';


let bed_name = ['Single Bed', 'Double Bed', 'Triple Bed', 'King Bed', 'Queen Bed']

export default function page({ params }: any, props: any) {
  const router = useRouter();
  const [totalRoom, setTotalRoom] = useState<any>(1)
  const [selectRoomdata, setSelectRoomData] = useState<any>()
  const [selectedRoomType, setSelectRoomType] = useState<any>()
  const [departDate, setDepartDate] = useState<Date | any>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | any>(null);
  const [room, setRoom] = useState([])
  const [roomType, setRoomType] = useState(0)
  const [isAirCondition, setIsAirCondition] = useState<boolean>(true)
  const [noofroom, setNoofRoom] = useState("");

  const { updateHotelDetails }: any = useSelector((state: any) => state.hotel);
  const dispatch = useAppDispatch();
  // console.log(" data::::::::>>>", updateHotelDetails);
  useEffect(() => {
    dispatch(getHotelById(params.id));
  }, [])

  // console.log(params)
  const data = updateHotelDetails?.data

  const displayeModeOfPaymnet = (data: any) => {

    let available_mode_payment = new Set()

    data?.map((paymant: any) => available_mode_payment.add(paymant.name))

    let name = (Array.from(available_mode_payment)).toString();
    return name
  }

  const roomtype_list = [
    { label: 'Single Bed', value: 1 },
    { label: 'Double Bed', value: 2 },
    { label: 'Triple Bed', value: 3 },
    { label: 'King Bed', value: 4 },
    { label: 'Queen Bed', value: 5 },

  ]
  // const filterRoom = () => {
  //   if (isAirCondition == true && roomType > 0) {

  //     let filterData = data?.rooms.filter((element: any) => element.no_of_bed == roomType && roomType == element.isAC)
  //     setRoom(filterData)
  //   } else if (isAirCondition == false && roomType > 0) {

  //     let filterData = data?.rooms.filter((element: any) => element.no_of_bed == roomType && roomType == element.isAC)
  //     setRoom(filterData)
  //   }
  //   else {
  //     let filterData = data?.rooms.filter((element: any) => element.no_of_bed == roomType)
  //     setRoom(filterData)
  //   }
  // }

  // const addMore = () => {

  // }

  const saveRoomDetatils = () => {

    let data: any = {

      departDate: departDate,
      checkoutDate: checkoutDate,
      totalRoom: totalRoom,
      totalPrice: getTotalPrice(),
      totalDays: getTotalDays(),
      selectedRoomType: selectedRoomType,
      selectRoomdata: selectRoomdata,
      hotelInfo: updateHotelDetails?.data

    }
    dispatch(saveSelectedRoomData(data)).then(() => {
      router.push('/user/hotels/bookHotel')
    })

  }


  const getTotalPrice = () => {
    return selectRoomdata?.price * totalRoom * getTotalDays()
  }
  const getTotalDays = () => {

    var date1 = moment(departDate, 'DD-MM-YYYY');
    var date2 = moment(checkoutDate, 'DD-MM-YYYY');
    var days = date2.diff(date1, 'days');
    return days || 1
  }

  console.log(room)
  return (
    updateHotelDetails?.data ?
      <div className=' mx-24 '>
        <div className='flex flex-row '>
          <div className='bg-[#FFFFFF] w-[900px] mx-2 my-3 p-5 rounded-lg overflow-auto h-full container' style={{ height: innerHeight }}>
            <div className='flex flex-col border-b border-gray-300  rounded-lg'>

              <div className=' mx-3 my-2 flex'>
                <img src="/image/hotel6.jpg"
                  alt="image-blur" className='h-[300px] w-[800px]' />
              </div>
              <div className='border-b border-gray-300 '>

                {/* <nav className='nav-tabs'>
                  <ul className='nav-ul'>
                    <li className='nav-li'><a href="#first">First</a></li>
                    <li><a href="#second">Second</a></li>
                    <li><a href="#third">Third</a></li>
                  </ul>
                </nav>
                <section id="first">First Section</section>
                <section id="second">Second Section</section>
                <section id="third">Third Section</section> */}

                <div className="scrollmenu ">
                  <a href="#About-Hotel">About Hotel</a>
                  <a href="#Amenities">Amenities</a>
                  <a href="#Choose-Room">Choose Room</a>
                  <a href="#Reviews">Reviews</a>
                  <a href="#Hotel-Policy">Hotel Policy</a>
                </div>
              </div>
              <div id="About-Hotel" className='p-1 mt-1'>
                <div className='flex justify-between'>
                  <div className=' flex text-2xl font-bold'>
                    <HandThumbUpIcon className="h-7 w-7 mr-2  text-blue-500" />
                    <p>{data?.hotelname}</p>
                  </div>

                </div>
                <BBRating />
                <p>{data?.ownerName}</p>
                <div className='flex'>
                  <p className='font-medium'> {data?.adress},{data?.street},{data?.pin} </p>
                  {/* <p> Establish In-22/05/2005</p> */}
                </div>
                <p>{data?.email}</p>

                <div className='flex h-8 mt-1 mb-5 justify-between'>
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
                  <div className=' shadow-md h-11 ml-5 w-60 text-center  bg-[#0071cc] text-white  rounded-md border border-gray-400   p-1'>
                    <p>Enquire Now</p>
                  </div>

                </div>

              </div>
            </div>
            <div className=' border-b border-gray-300'>

              <p className='flex text-xl text-[#0c2f54]   mt-3'>
                <IoChatbubblesOutline className="mt-1  text-4xl p-1 mr-1 text-gray-600" />Staff Speaks</p>
              <p className=' text-gray-600 ml-5'>English, Hindi,Marathi, Spanish, Arabic, Russian</p>
            </div>
            <div id="Amenities">
              <div className='text-3xl text-[#0c2f54] font-medium  mt-3'> Amenities</div>
              <div className="flex mt-2 ">
                <BiWifi className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <RiRestaurantFill className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <FaGlassMartiniAlt className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <BiSwim className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <IoBusinessSharp className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <BiSpa className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <CgGym className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
                <BiCctv className="mt-1 border border-gray-300 text-4xl p-1 mr-1 text-gray-600" />
              </div>
              <div className='grid grid-cols-4 gap-4 my-3 leading-8 alltesxte'>

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
            </div>
            <hr />

            <div id="Choose-Room" className='bg-white'>
              <div className='text-3xl text-[#0c2f54] font-medium  mt-3'> Choose Room</div>
              {/* <div>
                 <div className='flex mt-5 justify-between'>
                <div className=' w-[300px]'>
                  <BBDropdown label='Types Of Room Avialable'
                    value={roomType}
                    returnType="value"
                    options={roomtype_list}
                    onClick={filterRoom}
                    onPress={(value) => setRoomType(value)}
                  />
                </div>
                <div className='mr-5 flex '>
                  <p className='text-xl mt-1'>Select Room is -</p>
                  <Radio
                    label="AC"
                    name="isAirCondition"
                    color="blue"
                    value={isAirCondition + ""}
                    onClick={filterRoom}
                    onChange={(value) => setIsAirCondition(true)}
                  />
                  <Radio
                    label="NON-AC"
                    name="isAirCondition"
                    color="blue"
                    value={isAirCondition + ""}
                    onClick={filterRoom}
                    onChange={(value) => setIsAirCondition(false)}
                  />
                 
                </div>
              </div> 
              </div>  */}
              {data?.rooms.map((room: any, index: any) => (
                <div className=' flex flex-row w-[100%] border-b border-gray-300'>
                  <div className="w-[30%]">
                    <img
                      className="h-[220px] W-[300PX] mx-3 my-3 p-2  rounded-lg hover:opacity-80"
                      src="/image/hotel2.jpg"
                      alt="img-blur-shadow"
                    />
                  </div>
                  <div className='p-3 ml-6 w-[70%]' key={index}>
                    <div>
                      {room?.room_type.map((roomType: any) =>
                        <p className='text-2xl text-[#0c2f54] font-medium  mt-3'> {roomType.name}</p>
                      )}
                    </div>


                    <p className='flex mt-1 text-gray-600'> <FaBed className="mt-1 mr-2" />{bed_name[room.no_of_bed - 1]}</p>
                    <p>   Total Room- {room.no_rooms}</p>

                    <div className=' grid grid-cols-3 gap-1 mt-2'>
                      {room?.amenities.map((amenities: any, index: any) =>
                        <div className='flex  '>
                          <FaCheck className='h-4 w- mt-1 text-light-green-800 mr-1 ' />
                          <p className=' text-gray-600 '> {amenities.name}</p>
                        </div>
                      )}
                    </div>



                    <div className='flex flex-row mt-2'>
                      <p><BiRupee className="mt-1  text-xl font-semibold" /> </p>
                      <p className=' text-2xl font-semibold'>{room.price || 2999} </p>
                      <p className=' text-gray-600 ml-48  mt-1'>1 Room/Night </p>
                    </div>
                    <div className='flex justify-between mt-3'>

                      <p className=' text-[#0071cc] ml-8 mt-'>cancellation policy </p>
                      <Button type='submit' className=' border rounded-md
                     border-[#0071cc] text-[#0071cc] w-[140px] h-12 ml-2 '
                        onClick={() => {
                          setSelectRoomType(room.room_type?.[0].name)
                          setSelectRoomData(room)

                        }}>Select Room </Button>
                    </div>
                  </div>
                </div>
              ))}
              <p></p>
            </div>
            <div id="Reviews">
              <div className='text-3xl text-[#0c2f54] font-medium  mt-3'> Reviews</div>
              <p className='text-xl text-[#0c2f54]  font-medium  mt-3 mb-1'>Write a review</p>
              <p >Your Name</p>
              <BBInput type='textarea' value={"Rani"} label='Enter Your Name'
                onChange={() => { }} containerProps={{ className: 'h-[70px] mt-2' }} />

              <p className=' mt-5'>Your Review</p>
              <BBInput type='textarea' value={"Rani"} label='Enter Your Review'
                onChange={() => { }} containerProps={{ className: 'h-[150px] mt-2' }} />

            </div>
          </div>
          <div>
            <div className='bg-[#FFFFFF] w-[350px] mx-2 my-3 p-5 rounded-lg '>
              <div className='flex flex-col border-b border-gray-300  rounded-lg'>
                <div className='border-b  border-gray-300  mx-3 my-3  '>
                  <div className='text-xl font-semibold'> Room Details</div>
                  <div className='my-3 leading-8'>
                    <div className="flex flex-row gap-5">
                      <UDatePicker
                        id="departDate"
                        placeholder="Check In"
                        minDate={new Date()}
                        selected={departDate}
                        onChange={(date: any) => {
                          setDepartDate(date);
                        }}
                        className=" w-full h-12 border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
                      />
                      <UDatePicker
                        id="checkoutDate"
                        placeholder="Check Out"
                        minDate={new Date()}
                        selected={checkoutDate}
                        onChange={(date: any) => {
                          setCheckoutDate(date);
                        }}
                        className="w-full h-12 border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
                      />
                    </div>

                    <div className='mt-5'>
                      <Accordion
                        onChange={(value) => setTotalRoom(value)}
                        travelType="hotel" className=" h-12 border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]" />
                    </div>
                    <div className='mt-5'>
                      <Select
                        value={selectedRoomType}

                        label='Room Type' className="w-full h-12 mb-3  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]">
                        {data.rooms.map((element: any) =>
                          element?.room_type.map((roomType: any, index: any) =>
                            <Option value={roomType.name}
                              onClick={() => {
                                setSelectRoomType(roomType.name)
                                setSelectRoomData(element)
                              }} >{roomType.name}</Option>
                          ))}
                      </Select>
                    </div>

                    {selectRoomdata &&
                      <div className='flex flex-row justify-between mt-5'>
                        <p className=' text-2xl font-semibold'> ₹ {getTotalPrice()} </p>
                         <p className=' text-gray-600   mt-1'>{getTotalDays()} Room/Night </p>

                      </div>
                    }

                    <div className='mt-5' >
                      <BBButton
                        label=" BOOK NOW"
                        type="button"
                        onClick={saveRoomDetatils}
                        className=" w-full text-white text-[14px] bg-blue-600 border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
                      ></BBButton>
                    </div>
                  </div>
                </div>

                <div className='border-b border-gray-300  mx-3 my-3  '>
                  <div className='text-xl font-semibold'> Address</div>

                  <div className='my-3 leading-8'>
                    <p> {data?.adress},{data?.street}, </p>
                    <p>{data?.country},{data?.city},</p>
                    <p>{data?.pin}</p>
                    <div className='flex w-44 hover:bg-blue-gray-50 shadow-md p-1  mb-2'>
                      <ArrowUturnRightIcon className='h-6 w-6 mt-1 mr-3 ' />
                      <a href={`https://www.google.com/maps/search/?api=1&query=${data.location}`}>Get Direction</a>
                    </div>
                  </div>
                </div>

                <div className='border-b border-gray-300    mx-3 my-3 p-5 '>
                  <div className='text-xl font-semibold'> Quick Information</div>
                  <div >
                    <div className='text-gray-500 mt-4'>Mode of Payment</div>
                    <div className='mt-2'>
                      {displayeModeOfPaymnet(data?.payment)}
                    </div>
                  </div>
                  <div >
                    <div className='text-gray-500 mt-4'>Year of Establishment</div>
                    <p className='mt-3'>{data?.date}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="grid  place-content-center h-96">
        <h1>Loading</h1>
      </div>


  )
}
