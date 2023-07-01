"use client";

const Invoice = () => {
  return (
    <div className="px-60 p-4">
      <div className="container mx-auto p-16  border border-gray-400 rounded-[4px] bg-white bg-opacity-60 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2  ">
            <h4 className=" text-4xl ">Booking Baba</h4>
            <p></p>
          </div>
          <div className="flex-1 text-left sm:text-sm-end ">
            <h4 className="mb-0 text-2xl">Invoice</h4>
            <p className="mb-0">Invoice Number - 16835</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="w-1/3 mb-3 sm:mb-0">
            <p className="text-md text-[#00000080]">From:</p>
            <p className="font-bolt ">Mumbai</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">To:</p>
            <p className="font-bolt">Surat</p>
          </div>
          <div>
            <p className="text-md text-[#00000080] text-uppercase">
              Date of Journey
            </p>
            <p className="font-bolt">07/11/2019</p>
          </div>
        </div>
        <hr className="w-full my-4" />
        <div className="grid  grid-cols-4 ">
          <div className="  mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">
              Reporting Time:
            </p>

            <p className="font-bolt">8:50 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">
              Departure Time:
            </p>

            <p className="font-bolt">9:05 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">Status:</p>

            <p className="font-bolt">Booked</p>
          </div>
          <div>
            <p className="  text-md text-[#00000080] text-uppercase">
              Ticket ID:
            </p>

            <p className="font-bolt">QNOP3912</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="grid  sm:grid-cols-3 gap-4">
          <div className="  mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">
              Passenger Name:
            </p>

            <p className="font-bolt">Mr. Neil Patel</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">Seat:</p>

            <p className="font-bolt">16</p>
          </div>
          <div>
            <p className="  text-md text-[#00000080] text-uppercase">
              Ticket PNR:
            </p>

            <p className="font-bolt">5977747 - 4444152</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="grid  sm:grid-cols-3 gap-3">
          <div className=" mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">Travels:</p>

            <p className="font-bolt">AK Tour &amp; Travels</p>
          </div>
          <div className=" mb-3 sm:mb-0">
            <p className="text-md text-[#00000080] text-uppercase">Bus Type:</p>

            <p className="font-bolt">Multiaxel Volvo AC Sleeper</p>
          </div>
          <div>
            <p className=" text-md text-[#00000080] text-uppercase">
              Boarding Point Address:
            </p>

            <p className="font-bolt">
              Opp, National Bank, Near bus Stand. Mumbai.
            </p>
          </div>
        </div>
        <p className="bg-gray-200 rounded text-gray-800 text-lg items-center font-bolt p-3 mt-4 flex justify-end">
          <p>
            Total Fare: <p className="pl-2">$350.00</p>
          </p>
        </p>
        <p className="text-center text-gray-500 mt-4">
          **Always Carry ticket print out and your ID proof while traveling.
        </p>
        <hr className="my-4" />
        <p className="text-center">
          <div>
            <strong>Booking Baba Inc.</strong>
          </div>
          4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd, Suite
          100-18, San Diego CA 2028.
        </p>
        <hr />
        <p className="text-center text-sm pt-5">
          <strong>NOTE:</strong> This is a computer-generated receipt and does
          not require a physical signature.
        </p>

        <div className="text-center  mt-10">
          <div className="btn-group ">
            <a
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
