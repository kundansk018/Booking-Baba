"use client";
import BBDropdown from "@/app/components/BBDropdown";
import BBTypography from "@/app/components/BBTypography";
import { CustomModal } from "@/app/modal/CustomModal";
import { Adesh } from "@/app/user/train/newtrain/confirm/ConfirmDetails";
import UInput from "@/components/userComponents/UInput";
import React, { useState } from "react";

const ConfirmationPage: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = useState("");
  const handleClosemodal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white shadow-md rounded p-4">
          <h2 className="text-4xl ">Confirm Bus Details</h2>
          <div className="card p-5">
            <div className="card-header">
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                <div className="flex items-center">
                  <div className="w-1/4">
                    <h5 className="text-lg font-bold">Mumbai</h5>
                  </div>
                  <div className="w-2/3 text-center">
                    <h5 className="text-lg font-bold">Surat</h5>
                  </div>
                  <div className="text-center">
                    <h5 className="inline-block bg-light-green-900 text-white px-3 py-1 rounded-md">
                      Refundable
                    </h5>
                  </div>
                  <div className="text-center w-1/3 text-sm">
                    <a
                      className="text-center w-1/3 text-sm text-gray-500"
                      onClick={() => setShowModal(true)}
                    >
                      Fare Rules
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center mb-4">
                  <div className="w-1/3">
                    <h5 className="text-sm text-gray-500">15 Jun 18, Sat</h5>
                  </div>
                  <div className="w-1/4 text-center">
                    <h5 className="text-sm text-gray-500">16 Jun 18, Sun</h5>
                  </div>
                </div> */}
            <div className="card-body">
              {/* Train details */}
              <div className="flex items-center mb-4 pb-2 border border-gray-200">
                <div className="w-1/4 text-center">
                  <h5 className="text-lg">Ak Tour And Travles</h5>
                  <span className="text-sm text-gray-500">Ac Sleeper</span>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-2xl">23:00</h5>
                  <span className="text-sm text-gray-500">Mumbai</span>
                  {/* <h5 className="text-sm text-gray-500">15 Jun 18, Sat</h5> */}
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-lg">18h 55m</h5>
                  <span className="text-sm text-gray-500">12 Stops</span>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-2xl">18:15</h5>
                  <span className="text-sm text-gray-500">Surat</span>
                  {/* <h5 className="text-sm text-gray-500">16 Jun 18, Sun</h5> */}
                </div>
              </div>
              <div className="alert text-sm alert-info mb-4 bg-[#b6effb] p-3 rounded-sm">
                <span className=" bg-cyan-300  p-[2px] rounded-sm">NOTE:</span>{" "}
                This is a special fare given by the railway. Railway
                cancellation charges do apply.
              </div>
              <h2 className="text-3xl mb-4 mt-6">
                Traveller Details -
                <span className="text-lg">
                  <a className="text-blue-700"> Login </a>to book faster{" "}
                </span>
                {/* <span className="text-sm text-gray-500">
                  Login to book faster
                </span> */}
              </h2>
              <p className="font-semibold">Contact Details</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput id="email" type="email" placeholder=" Enter Email" />
                </div>

                <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                  <UInput
                    id="phone"
                    type="text"
                    placeholder="Enter Mobile Details"
                  />
                </div>
                {/* <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <input
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                
               
                <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                  <input
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="address"
                    type="text"
                    placeholder="Address"
                  />
                </div> */}
              </div>
              <p className="font-semibold">Adult 1</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <BBDropdown
                    containerProps={{ className: "mb-3 pr-3" }}
                    options={[
                      { label: "Mr" },
                      { label: "Ms" },
                      { label: "Mrs" },
                    ]}
                    value={title}
                    onPress={(value: any) => {
                      setTitle(value);
                    }}
                    label="Title"
                  />
                  {/* </UInput> */}
                </div>
                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <UInput
                    // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="passenger-name"
                    type="text"
                    placeholder="Enter Frist Name"
                  />
                </div>
                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <UInput
                    // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="passenger-name"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </div>

                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <UInput
                    // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="passenger-age"
                    type="text"
                    placeholder="Age"
                  />
                </div>
              </div>
            </div>
            {/* <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                type="submit"
              >
                Book Ticket
              </button> */}
          </div>
        </div>
        <aside className="bg-white shadow-md rounded p-4">
          <h3 className="text-3xl mb-2">Fare Details</h3>
          <div className="space-y-2">
            <aside className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-white shadow-md rounded p-3">
                <ul className="list-none">
                  <li className="mb-2">
                    Base Fare{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $980
                    </span>
                    <br />
                    {/* <small className="text-muted">
                      Adult: 1, Child: 0, Infant: 0
                    </small> */}
                  </li>
                  <li className="mb-2">
                    Taxes &amp; Fees{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $215
                    </span>
                  </li>
                  <li className="mb-2">
                    Insurance{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $95
                    </span>
                  </li>
                </ul>
                <div className="text-dark bg-gray-100 text-4 font-semibold p-3">
                  Total Amount <span className="float-right text-6">$1290</span>
                </div>
                <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
                <div className="flex items-center mb-4">
                  <UInput
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Promo Code"
                    aria-label="Promo Code"
                    type="text"
                  />
                  <button
                    className="bg-blue-500 shadow-none ml-3 px-3 py-2 rounded-md"
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
                      Terms &amp; Conditions
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
