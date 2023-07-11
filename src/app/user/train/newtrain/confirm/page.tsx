"use client";
import { Adesh } from "@/app/user/train/newtrain/confirm/ConfirmDetails";
import UInput from "@/components/userComponents/UInput";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/solid";
import BBButton from "@/app/components/BBButton";
import { useRouter } from "next/navigation";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const trainData: any = useSelector((state: any) => state.train.getTrainById);
  console.log("Train data is in update page ..", trainData);

  const [age, setAge] = useState("");

  const [person, setPerson] = useState<any>([
    { fName: "", lName: "", age: "" },
  ]);

  const handleClosemodal = () => {
    setShowModal(false);
  };

  const addMore = () => {
    let data = [...person];
    data.push({ fName: "", lName: "", age });
    setPerson(data);
  };

  const onSub = () => {
    let data = [...person];
    data.pop();
    setPerson(data);
  };

  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <div className="col-span-2 bg-white shadow-md rounded p-4">
          <h2 className="text-2xl  text-[#0c2f54]">Confirm Trains Details</h2>
          <div className="card p-5">
            <div className="card-header">
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                <div className="flex items-center">
                  <div className="w-1/4 bg-white">
                    <h5 className="text-lg font-medium text-[#0c2f54]">
                      {trainData?.data?.from_Stn}
                    </h5>
                  </div>
                  <div className="w-1/4 ">
                    <h5 className="text-3xl flex">
                      <BsArrowRight />
                    </h5>
                  </div>
                  <div className="w-2/3">
                    <h5 className="text-lg  font-xl text-[#0c2f54]">
                      {trainData?.data?.to_Stn}
                    </h5>
                  </div>

                  <div className="w-2/3 text-left ">
                    <h3 className="text-[#413e3e]">
                      {trainData?.data?.depDate}
                    </h3>
                  </div>

                  <div className="text-center">
                    <h5 className="inline-block bg-light-green-900 text-white px-3 py-1 rounded-md">
                      Refundable
                    </h5>
                  </div>
                  <div className="text-center w-1/3 text-sm">
                    <a
                      className="text-center w-1/3 text-sm text-blue-500"
                      onClick={() => setShowModal(true)}
                    >
                      Fare Rules
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="flex items-center mb-4 pb-2 border border-gray-200">
                <div className="w-1/4 text-center">
                  <h5 className="text-lg">{trainData?.data?.trainName}</h5>
                  <span className=" text-gray-500">
                    {trainData?.data?.trainNo}
                  </span>
                  <h5 className="mt-2">
                    Class :{" "}
                    <span className="bg-[#0dcaf0] p-1 text-white rounded">
                      {trainData?.data?.classType}
                    </span>
                  </h5>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-2xl">{trainData?.data?.depTime}</h5>
                  <span className="text-sm text-gray-500">
                    {trainData?.data?.from_Stn}
                  </span>
                  <h5 className="text-sm text-gray-500">
                    {trainData?.data?.depDate}
                  </h5>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-lg">{trainData?.data?.duration}</h5>
                  <span className="text-sm text-gray-500">
                    {trainData?.data?.stops} Stops
                  </span>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-2xl">{trainData?.data?.arrivalTime}</h5>
                  <span className="text-sm text-gray-500">
                    {trainData?.data?.to_Stn}
                  </span>
                  <h5 className="text-sm text-gray-500">
                    {trainData?.data?.arrDate}
                  </h5>
                </div>
              </div>
              <div className="alert text-sm alert-info mb-4 bg-[#b6effb] p-3 rounded-sm">
                <span className=" bg-cyan-300  p-[2px] rounded-sm">NOTE:</span>{" "}
                This is a special fare given by the railway. Railway
                cancellation charges do apply.
              </div>
              <h2 className="text-3xl mb-4 mt-6">
                Traveller Details -{" "}
               
              </h2>
              <p className="font-semibold">Contact Details</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput id="name" type="text" placeholder="Name" />
                </div>
                <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                  <UInput id="email" type="email" placeholder="Email" />
                </div>
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput id="phone" type="text" placeholder="Phone" />
                </div>
                <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                  <UInput id="address" type="text" placeholder="Address" />
                </div>
              </div>
              <p className="font-semibold">Passenger Details</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput
                    id="passenger-name"
                    type="text"
                    placeholder="Passenger Name"
                  />
                </div>
                <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                  <UInput id="passenger-age" type="text" placeholder="Age" />
                </div>
              </div>
            </div>
           
          </div>
        </div>


 */}

        <div className="col-span-2 bg-white shadow-md rounded p-4">
          <h2 className="text-2xl text-[#0c2f54] ml-4">
            Confirm Trains Details
          </h2>
          <div className="card p-5">
            <div className="card-header">
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                <div className="flex items-center">
                  <div className="w-1/4  bg-white">
                    <h5 className=" ml-3 text-lg font-medium text-[#0c2f54]">
                      {trainData?.data?.from_Stn}
                    </h5>
                  </div>
                  <div className="w-1/4">
                    <h5 className="text-3xl   flex justify-center">
                      <BsArrowRight />
                    </h5>
                  </div>
                  <div className="w-2/3 ">
                    <h5 className="text-lg font-xl text-[#0c2f54] ">
                      {trainData?.data?.to_Stn}
                    </h5>
                  </div>

                  <div className="w-2/3 text-left pr-13">
                    <h3 className="text-[#413e3e]">
                      {" "}
                      {trainData?.data?.depDate}
                    </h3>
                  </div>

                  <div className="text-center">
                    <h5 className="inline-block bg-[#28a745] text-white px-3 py-0 mr-6 rounded-md">
                      Refundable
                    </h5>
                  </div>
                  <div className="text-center w-1/3 text-sm">
                    <a
                      className="text-center w-1/3 text-sm cursor-pointer  text-blue-500"
                      onClick={() => setShowModal(true)}
                    >
                      Fare Rules
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="border border-gray-200">
                <div className="mt-3 flex items-center mb-1 pb-2 ">
                  <div className="">
                    <div className="w-full ml-[6px] ">
                      <h5 className="ml-3 text-lg  ">
                        {trainData?.data?.trainName}
                      </h5>
                      <span className="ml-3 text-sm text-gray-500">
                        {trainData?.data?.trainNo}
                      </span>
                    </div>
                  </div>

                  <div className="w-1/4 text-center">
                    <h5 className="text-xl">{trainData?.data?.depTime}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.from_Stn}
                    </span>
                    <h5 className="text-sm text-gray-500">
                      {trainData?.data?.depDate}
                    </h5>
                  </div>

                  <div className="w-1/4 text-center">
                    <h5 className="text-lg">{trainData?.data?.duration}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.stops} Stops
                    </span>
                  </div>
                  <div className="w-1/4 text-center">
                    <h5 className="text-xl"> {trainData?.data?.arrivalTime}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.to_Stn}
                    </span>
                    <h5 className="text-sm text-gray-500">
                      {trainData?.data?.arrDate}
                    </h5>
                  </div>
                </div>

                <div className="w-full ml-4 pb-3 text-sm">
                  <h5>
                    Class :{" "}
                    <span className="bg-[#0dcaf0] p-1 text-white rounded">
                      {trainData?.data?.classType}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="alert text-sm alert-info  my-4 bg-[#cff4fc] p-2 rounded-sm">
                <span className=" bg-[#0dcaf0] p-[0px] rounded-sm text-white text-xs p-1">
                  NOTE:
                </span>{" "}
                This is a special fare given by the railway. Railway
                cancellation charges do apply.
              </div>
              <h2 className="text-2xl text-[#0c2f54] mb-4 mt-6">
                Traveller Details :
                <span className="text-lg">
                  <a
                    className="text-blue-700 mr-2 pl-2"
                     onClick={() => router.push("/auth")}
                  >
                     Login
                  </a>
                  to book faster
                </span>
              </h2>
              <p className="font-bold text-[#535b61] mb-2">Contact Details</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput
                    id="First Name"
                    type="text"
                    placeholder="First Name "
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput
                    id="Last Name"
                    type="text"
                    placeholder=" Last Name "
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput
                    id="email"
                    type="email"
                    placeholder=" Enter Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput
                    id="phone"
                    type="text"
                    placeholder="Enter Mobile Details"
                    // value={mobileNumber}
                    // onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              </div>
              <p className="font-bold text-[#535b61] mb-2">Adult 1</p>
              <div className="cursor-pointer w-fit flex ">
                <div className="mb-1 text-sm">Add More</div>
                <div className="">
                  <PlusIcon className=" w-5" onClick={addMore} />
                </div>
              </div>
              {person.map((element: any, index: any) => (
                <div className="flex flex-wrap mb-0 ">
                  <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                    <UInput
                      // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                      id="passenger-name"
                      type="text"
                      placeholder="Enter First Name"
                      // value={element.fName}
                      // onChange={(e: any) => setFName(index, e.target.value)}
                    />
                  </div>
                  <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                    <UInput
                      // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                      id="passenger-name"
                      type="text"
                      placeholder="Enter Last Name"
                      // value={element.lName}
                      // onChange={(e) => setLName(index, e.target.value)}
                    />
                  </div>

                  <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                    <UInput
                      // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                      id="passenger-age"
                      type="text"
                      placeholder="Age"
                      // value={element.age}
                      // onChange={(e) => set_Age(index, e.target.value)}
                    />
                  </div>

                  <div className="w-full sm:w-1/4 sm:pr-2 ">
                    <BBButton onClick={onSub} className="w-fit" label={"-"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl mb-2 text-[#0c2f54] font-bold">Fare Details</h3>
          <div className="space-y-2">
            <aside className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-white shadow-md rounded p-3">
                <ul className="list-none text-sm">
                  <li className="mb-2">
                    Base Fare{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $980
                    </span>
                    <br />
                    <small className="text-muted text-[12px]">
                      Adult: 1, Child: 0, Infant: 0
                    </small>
                  </li>
                  <li className="mb-2">
                    Taxes &amp; Fees{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $215
                    </span>
                  </li>
                  <li className="mb-2">
                    Insurance
                    <span className="float-right text-4 font-medium text-dark">
                      $95
                    </span>
                  </li>
                </ul>
                <div className="text-dark bg-gray-100 text-4 font-semibold p-3">
                  Total Amount <span className="float-right text-6">$1290</span>
                </div>
                <h3 className="text-lg font-bold mb-3 mt-4 text-[#0c2f54]">Promo Code</h3>
                <div className="flex items-center mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Promo Code"
                    aria-label="Promo Code"
                    type="text"
                  />
                  <button
                    className="bg-blue-500 text-white shadow-none ml-3 px-3 py-2 rounded-md"
                    type="submit"
                  >
                    APPLY
                  </button>
                </div>
                <ul className="list-disc pl-5 mb-5">
                  <li>
                    <div className="text-3 font-semibold">FLTOFFER</div>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions 1{" "}
                    </a>
                  </li>
                  <li>
                    <div className="text-3 font-semibold">HOTOFFER</div>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  {/* <li>
                    <span className="text-3 font-semibold">SUMMEROFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">BIGOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">FLTOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">FLTOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li> */}
                </ul>
              </div>
            </aside>
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
              onClick={() => setShowModal(true)}
            >
              Proceed to Pay
            </button>
          </div>
        </aside>
      </section>

      {/* Fare Rules Modal */}
      {showModal && <Adesh />}

      {/* {showModal ? (
                        <CustomModal
                          children={
                            <Adesh
                            // onSubmit={setShowModal(false)}
                            />
                          }
                          showModalHeader={true}
                          modalHeader={"Bus Booking Details"}
                          isFlexible={true}
                          topRightCloseButtonID={"x-  "}
                          showModal={true}
                          showBackButton={true}
                          showBBPSLogo={true}
                          handleBackClick={handleClosemodal}
                        ></CustomModal>
                      ) : null} */}
    </div>
  );
};

export default ConfirmationPage;
