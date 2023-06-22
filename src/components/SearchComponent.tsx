// import { Input } from "@material-tailwind/react";
// import React from "react";

// interface Props {
//   label: string;
//   value?: string;
//   type?: string;
//   classNameName?: string;
//   onChange: (e: any) => void; // for function type
//   containerProps?: any;
//   color?: any;
//   max?: number;
//   min?: number;
// }

// export default function CustomComponents(props: Props) {
//   return (
//     <div classNameNameName="w-72">
//       <Input label={props.label} />
//     </div>
//   );
// }

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SearchData {
  from: string;
  to: string;
  arrivalDate: Date | any;
  dropdownValue: string | any;
  id?: number;
  label?: string;
  onChange?: (e: any) => void;
}

const SearchComponent = (props: SearchData) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [dropdownValue, setDropdownValue] = useState("");

  console.log("from", props.from);
  console.log("from", arrivalDate);

  const handleSearch = () => {
    const searchData = {
      from,
      to,
      arrivalDate: arrivalDate || new Date(),
      dropdownValue,
    };
  };

  return (
    <div className="md:flex flex-row gap-4 max-w-xs ">
      <input
        type="text"
        id="from"
        value={from}
        required
        placeholder="From"
        onChange={(e) => setFrom(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
      />
      <input
        type="text"
        id="to"
        value={to}
        placeholder="To"
        onChange={(e) => setTo(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
      />
      <DatePicker
        id="arrivalDate"
        selected={arrivalDate}
        placeholderText="Arrival Date"
        minDate={new Date()}
        onChange={(date) => setArrivalDate(date)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
      />
      <select
        id="dropdown"
        value={dropdownValue}
        placeholder="Dropdown"
        onChange={(e) => setDropdownValue(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
