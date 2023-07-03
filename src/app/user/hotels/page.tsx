"use client";
import BBButton from "@/app/components/BBButton";
import BBCheckbox from "@/app/components/BBCheckbox";
import BBDate from "@/app/components/BBDate";
import BBDropdown from "@/app/components/BBDropdown";
import BBInput from "@/app/components/BBInput";
import BBRating from "@/app/components/BBRating";
import BBSearch from "@/app/components/BBSearch";
import { FaBeer } from 'react-icons/fa';
import { RiRestaurantFill } from 'react-icons/ri';
import { BiWifi } from 'react-icons/bi';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import { BiSwim } from 'react-icons/bi';
import { IoBusinessSharp } from 'react-icons/io5';
import { BiSpa } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { BiRupee } from 'react-icons/bi';
import {
  getHotels,
  searchHotelByName,
  sortHotel,
} from "@/redux/action/hotelaction";
import { useAppDispatch } from "@/redux/store";
import { amenities, propert_type, star_category, user_review } from "@/utils/Data";

import { HandThumbUpIcon, WifiIcon } from "@heroicons/react/24/outline";

import { MapPinIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionBody, AccordionHeader, Checkbox, checkbox } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HomeSearch from "@/components/HomeSearch";
import UBannerFooter from "@/components/userComponents/UBannerFooter";
import UFooter from "@/components/userComponents/UFooter";


function Icon({ id, open }:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0071cc"
      strokeWidth={2}
    >
      <path strokeLinecap="round"  strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface Props {
  type?: any;
}


export default function UserHotelPage() {
  const [type, setType] = useState("hotel");

  const [searchKey, setSearchKey] = useState("");
  const [name, setName] = useState("");
  const [no, setNo] = useState("");
  const [uemail, setUEmail] = useState("");
  const [sort, setSort] = useState("")
  const [date, setDate] = useState("")

  const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
  const dispatch = useAppDispatch();
  console.log(" using usestate hotel data is ..", hotelData);
  useEffect(() => {
    dispatch(getHotels());
  }, []);

  const router = useRouter();

  //   const displayeAmenities = (rooms: any) => {
  //     let available_amenities = new Set();
  //     rooms?.map((room: any) => {
  //       room?.amenities?.map((amenity: any) =>
  //         available_amenities.add(amenity?.name)
  //       );
  //     });

  //     let name = Array.from(available_amenities).toString();
  //     return name;
  //   };

  const displayeAmenities = (rooms: any) => {
    let available_amenities = new Set();
    rooms?.map((room: any) => {
      room?.amenities?.map((amenity: any) =>
        available_amenities?.add(amenity.name)
      );
    });

    let name = Array.from(available_amenities).toString();
    return name;
  };

  const displayeView = (rooms: any) => {
    let available_view = new Set();
    rooms?.map((room: any) => {
      room?.view?.map((item: any) => available_view.add(item.name));
    });
    let name = Array.from(available_view).toString();
    return name;
  };

  const searchByName = (searchKey: any) => {
    dispatch(searchHotelByName(searchKey));
  };

  useEffect(() => {
    if (searchKey == "") {
      dispatch(getHotels());
    }
  }, [searchKey]);

  const datasort = [
    { label: "No Sort", value: "Select" },
    { label: "Low to High", value: "Low to High" },
    { label: "High to Low", value: "Low to High" },
  ];

  useEffect(() => {
    if (sort == "Select") {
      dispatch(getHotels());
    }
    dispatch(sortHotel(sort));
  }, [sort]);
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };
 
  return hotelData ? (
    <div>
      <div>
        <div className="h-[180px]   my-5  border  flex">
          <img src="/image/hotel.jpg" alt="image-blur" />
          <img src="/image/hotel1.jpg" alt="image-blur" />
          <img src="/image/hotel2.jpg" alt="image-blur" />
          <img src="/image/hotel.jpg" alt="image-blur" />
          <img src="/image/hotel1.jpg" alt="image-blur" />
        </div>
      </div>
      <div className="flex justify-between p-3  mx-24">
        <HomeSearch travelType={type} />
      </div>

      {/* <div className="flex justify-between p-3  mx-24">
        <div className="ml-5 ">
          <BBDropdown
            label="Sort By"
            value={sort}
            options={datasort}
            onPress={(value) => {
              setSort(value);
            }}
          />
        </div>
        <div className="mx-3">
          <BBDate />
        </div>

        <div className="flex justify-end ">
          <div className="mr-2">
            <BBInput
             containerProps={ {className: "h-14" }}
              label="Select Location"
              value="pune"
              onChange={(e) => { }}
            />
          </div>
          <div className="w-[500px] h-14 ">
            <BBInput  containerProps={ {className: "h-14" }}
              type="search"
              label="Search .."
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
          </div>
          <div className="">
            <Button
              type="button"
              className="hover- border rounded-lg 
                    bg-[#0071cc] border-gray-500  ml-2 h-14 w-[150px]"
              onClick={() => searchByName(searchKey)}
            >
              Search
            </Button>
          </div>
        </div>
      </div> */}

      <div className=" flex flex-row  mx-24 gap-5 ">
        <div>
          <div className=" bg-white mt-4 ml-4 w-[320px]  rounded-lg">
            <div>
              <p className="  ml-4  mt-5 text-2xl font-semibold "> Filter</p>
            </div>
            <hr />
            <div>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-0 pr-5"
                >
                  <p className="text-lg  mt-3 ml-4  text-light-blue-800 border-0">
                    {" "}
                    Hotel Name
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  <div className="  mb-5 ml-4 flex ">
                    <div className="w-[200px]  ">
                      <BBInput
                        type="search"
                        label="Search .."
                        value={searchKey}
                        onChange={(e) => {
                          setSearchKey(e.target.value);
                        }}
                      />
                    </div>
                    <div className="">
                      <Button
                        type="button"
                        className="hover- border rounded-lg 
                    bg-[#0071cc] text-white border-gray-500  ml-2 h-10 w-[70px]"
                        onClick={() => searchByName(searchKey)}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
            <hr />
            <div>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-0 pr-5"
                >
                  <p className="text-lg  mt-3 ml-4  text-light-blue-800">
                    {" "}
                    Price
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  <div className=" mb-5 ml-4 w-[200px] ">
                    <BBDropdown
                      label="Sort By"
                      value={sort}
                      options={datasort}
                      onPress={(value) => {
                        setSort(value);
                      }}
                    />
                  </div>
                </AccordionBody>
              </Accordion>
            </div>{" "}
            <hr />
            <div>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-0 pr-5"
                >
                  <p className="text-lg  mt-3 ml-4  text-light-blue-800  ">
                    {" "}
                    Property Type
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  {propert_type.map((element) => (
                    <div className=" ">
                      <Checkbox label={element.name} />
                    </div>
                  ))}
                </AccordionBody>
              </Accordion>
            </div>{" "}
            <hr />
            <div>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-0 pr-5"
                >
                  <p className="text-lg  mt-3 ml-4  text-light-blue-800 my-3 ">
                    {" "}
                    Start Category
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  {star_category.map((element) => (
                    <div className="">
                      <Checkbox label={element.name} />
                    </div>
                  ))}
                </AccordionBody>
              </Accordion>
            </div>{" "}
            <hr />
            <div>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-0 pr-5"
                >
                  <p className="text-lg  mt-3 ml-4  text-light-blue-800 my-3 ">
                    {" "}
                    User Revies
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  {user_review.map((element) => (
                    <div className=" ">
                      <Checkbox label={element.name} />
                    </div>
                  ))}
                </AccordionBody>
              </Accordion>
            </div>{" "}
            <hr />
            <div>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-0 pr-5"
                >
                  <p className="text-lg  mt-3 ml-4  text-light-blue-800 my-3 ">
                    {" "}
                    Amenities
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  {amenities.map((element) => (
                    <div className=" ">
                      <Checkbox label={element.name} />
                    </div>
                  ))}
                </AccordionBody>
              </Accordion>
            </div>{" "}
            <hr />
          </div>
          <div className=" border bg-white mt-4 ml-4 w-[320px]  rounded-lg">
            <div className="text-center mt-3 text-xl">Are you looking for?</div>

            <div className="mx-5">
              <BBInput
                containerProps={{ className: "mb-4 mt-3" }}
                type="text"
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <BBInput
                containerProps={{ className: "mb-4" }}
                type="number"
                value={no}
                label="Mobile Number"
                onChange={(e) => setNo(e.target.value)}
              />
              <BBInput
                containerProps={{ className: "mb-4" }}
                type="email"
                value={uemail}
                label="Email ID"
                onChange={(e) => setUEmail(e.target.value)}
              />
              <Button
                type="button"
                className="border border-gray-500 text-center w-[280px] h-9 rounded-lg bg-[#8075f5] mb-5"
              >
                Get Best Deal
              </Button>
            </div>
          </div>
        </div>
        <div>
          {hotelData?.map((element: any, index: any) => (
            <div className=" flex flex-row  w-[100%]">
              <div
                className="flex flex-row justify-center  bg-white mt-4 p-2 gap-5 rounded-lg w-[100%]"
                onClick={() =>
                  router.push("/user/hotels/hotelsDetail/" + element._id)
                }
              >
                <div className="w-[30%]">
                  <img
                    className="h-[180px] mx-3 my-3  hover:opacity-80"
                    src="/image/hotel2.jpg"
                    alt="img-blur-shadow"
                  />
                </div>
                <div className="mx-5 my-3 w-[50%]">
                  <h1 className="text-2xl">{element.hotelname}</h1>
                  <p>Owner:{element.ownerName}</p>
                  <div className="mt2">
                    <BBRating />
                  </div>
                  <p>
                    {element.adress} {element.street}
                  </p>
                  <div className="flex mt-2">
                    <BiWifi className="mt-1 " />
                    <RiRestaurantFill className="ml-2 mt-1 " />
                    <FaGlassMartiniAlt className="ml-2 mt-1" />
                    <BiSwim className="ml-2 mt-1" />
                    <IoBusinessSharp className="ml-2 mt-1" />
                    <BiSpa className="ml-2 mt-1" />
                    <CgGym className="ml-2 mt-1" />
                  </div>
                  <p className="mt-2">Min Price- {element.min_order_price}</p>
                  <p>contact :{element.contactno}</p>
                </div>
                <div className=" flex flex-col pr-2 w-[20%] ">
                  <p className=" flex justify-end content-end text-2xl font-semibold mt-16">
                    <BiRupee className="mt-1" />
                    {element.min_order_price}
                  </p>
                  <p className=" flex justify-end content-end mb-3">
                    1 Room/Night
                  </p>
                  <div className=" flex justify-end content-end">
                    <Button
                      type="button"
                      className="hover- border rounded-lg 
                    bg-[#0071cc] border-gray-500 text-white ml-2 h-10 w-[100px]"
                      onClick={() => searchByName(searchKey)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center my-5">
        <UBannerFooter />
      </div>
      <div className="mb-10">
        <UFooter />
      </div>
    </div>
  ) : (
    <p>Data Not Found...</p>
  );
}
