import BBButton from "@/app/components/BBButton";
import BInput from "@/app/components/BInput";
import react, { useState } from "react";
import DatePicker from "react-datepicker";
import InputIcon from "react-multi-date-picker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  from?: string;
  to?: string;
  arrivalDate?: Date | any;
  checkoutDate?: Date | any;

  dropDownValue?: string | any;
  title?: string;
}

export default function HomeSearch(props: Props) {
  const [from, setFrom] = useState("");
  const [to, SetTo] = useState("");
  const [arrivalDate, setArrivalDate] = useState<Date | any>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | any>(null);
  const [dropDownValue, setDropdownValue] = useState("");
  // const [] = useState("");

  console.log("from", props.from);

  const handleSearch = () => {
    const searchData = {
      from,
      to,
      arrivalDate,
      checkoutDate,
      dropDownValue,
    };
  };

  return (
    <div className="w-full">
      <div className="p-5 bg-white">
        <div className="flex flex-col justify-center  gap-4">
          <div className=" text-lg font-medium text-black">{props.title}</div>
          <div className="flex flex-row gap-5">
            <BInput
              type="text"
              id="from"
              value={from}
              required
              placeholder="From"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              className=" w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
            ></BInput>
            <BInput
              type="text"
              id="to"
              value={to}
              placeholder="To"
              onChange={(e) => {
                SetTo(e.target.value);
              }}
              className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
            ></BInput>
          </div>

          <DatePicker
            id="arrivalDate"
            placeholderText="Arrival Date"
            minDate={new Date()}
            selected={arrivalDate}
            onChange={(date) => {
              setArrivalDate(date);
            }}
            className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
          />
          <DatePicker
            id="checkoutDate"
            placeholderText="checkout Date"
            minDate={new Date()}
            selected={checkoutDate}
            onChange={(date) => {
              setCheckoutDate(date);
            }}
            className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
          />
          <select
            id="dropDown"
            value={props.dropDownValue}
            placeholder="SeDropdownats"
            onChange={(e) => {
              setDropdownValue(e.target.value);
            }}
            className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
          >
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
          <BBButton
            label="Search"
            type="button"
            onClick={handleSearch}
            className="w-full text-white text-[14px] bg-blue-600 border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
          ></BBButton>
        </div>
      </div>
    </div>
  );
}
