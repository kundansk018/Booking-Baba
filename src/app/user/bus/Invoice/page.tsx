"use client";

import BBButton from "@/app/components/BBButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Invoice = () => {
  const [print, setPrint] = useState<boolean>(false);
  const router = useRouter();
  function funPrint() {
    setPrint(true);
    router.push("javascript:window.print()");
  }

  return (
    <div className="">
      <div className="card mx-auto px-10 py-5 border border-gray-400 rounded-[4px] bg-white bg-opacity-60 ">
        <div className="grid grid-cols-3 ">
          <div className="col-span-2  ">
            <h4 className=" text-2xl ">Booking Baba</h4>
            <p></p>
          </div>
          <div className="flex-1 text-left sm:text-sm-end ">
            <h4 className="mb-0 text-xl">Invoice</h4>
            <p className="mb-0">Invoice Number - 16835</p>
          </div>
        </div>
        <hr className="my-1 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="w-1/3 mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080]">From:</p>
            <p className="font-bolt ">Mumbai</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">To:</p>
            <p className="font-bolt">Surat</p>
          </div>
          <div>
            <p className="text-sm text-[#00000080] text-uppercase">
              Date of Journey
            </p>
            <p className="font-bolt">07/11/2019</p>
          </div>
        </div>
        <hr className="bg-black my-1" />
        <div className="grid  grid-cols-4 ">
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">
              Reporting Time:
            </p>

            <p className="font-bolt">8:50 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">
              Departure Time:
            </p>

            <p className="font-bolt">9:05 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Status:</p>

            <p className="font-bolt">Booked</p>
          </div>
          <div>
            <p className="  text-sm text-[#00000080] text-uppercase">
              Ticket ID:
            </p>

            <p className="font-bolt">QNOP3912</p>
          </div>
        </div>
        <hr className="my-1" />
        <div className="grid  sm:grid-cols-3 gap-4">
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">
              Passenger Name:
            </p>

            <p className="font-bolt">Mr. Neil Patel</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Seat:</p>

            <p className="font-bolt">16</p>
          </div>
          <div>
            <p className="  text-sm text-[#00000080] text-uppercase">
              Ticket PNR:
            </p>

            <p className="font-bolt">5977747 - 4444152</p>
          </div>
        </div>
        <hr className="my-1" />
        <div className="grid  sm:grid-cols-3 gap-3">
          <div className=" mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Travels:</p>

            <p className="font-bolt">AK Tour &amp; Travels</p>
          </div>
          <div className=" mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Bus Type:</p>

            <p className="font-bolt">Multiaxel Volvo AC Sleeper</p>
          </div>
          <div>
            <p className=" text-sm text-[#00000080] text-uppercase">
              Boarding Point Address:
            </p>

            <p className="font-bolt">
              Opp, National Bank, Near bus Stand. Mumbai.
            </p>
          </div>
        </div>
        <p className="bg-gray-200 rounded text-gray-800 text-lg items-center font-bolt p-1 pr-52 mt-1 text-right">
          <p>
            Total Fare: <p className="pl-2">$350.00</p>
          </p>
        </p>
        <hr className="my-[1px]" />
        <p className="text-center">
          <div>
            <strong>Booking Baba Inc.</strong>
          </div>
          4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd, Suite
          100-18, San Diego CA 2028.
        </p>
        <hr />
        <p className="text-center text-sm pt-1">
          <strong>NOTE:</strong> This is a computer-generated receipt and does
          not require a physical signature.
        </p>
        <p className="text-center text-gray-800 ">
          **Always Carry ticket print out and your ID proof while traveling.
        </p>

        <div className="text-center  mt-5">
          <div className="btn-group ">
            {!print ? (
              <>
                <BBButton
                  // href="javascript:window.print()"
                  onClick={funPrint}
                  className="btn bg-gray-200 w-fit text-gray-800 border border-gray-400 px-4 py-2 shadow-sm "
                >
                  <i className="fa fa-print "></i> Print
                </BBButton>
                <BBButton
                  // href=""
                  className="btn bg-gray-200 w-fit text-gray-800 border border-gray-400 px-4 py-2 shadow-sm"
                >
                  <i className="fa fa-download"></i> Download
                </BBButton>
              </>
            ) : (
              ""
            )}

            {/* <a
              href="javascript:window.print()"
              className="btn bg-gray-200 w- text-gray-800 border border-gray-400 px-4 py-2 shadow-sm "
            >
              <i className="fa fa-print "></i> Print
            </a>
            <a
              href=""
              className="btn bg-gray-200 text-gray-800 border border-gray-400 px-4 py-2 shadow-sm"
            >
              <i className="fa fa-download"></i> Download
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
