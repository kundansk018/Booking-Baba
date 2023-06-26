import React, { useState } from "react";

interface Props {
  travelType: any;
  className?: any;
}

type Option = {
  label: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

type DropdownItemProps = {
  option: Option;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ option }) => {
  const { label, count, setCount } = option;

  const decreaseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="border border-b-gray-300 border-t-0 border-x-0">
      <div className=" flex items-center justify-between my-2  gap-[150px]">
        <div className="mr-2">{label}</div>
        <div className="flex items-center justify-between ">
          <button
            className="bg-[#e7e9ed] text-black hover:bg-blue-700 font-bold h-8 w-8 rounded-sm flex justify-center items-center"
            onClick={decreaseCount}
          >
            -
          </button>
          <input
            type="text"
            className="text-center w-12 border-l border-r focus:outline-none"
            value={count}
            readOnly
          />
          <button
            className="bg-[#e7e9ed] text-black hover:bg-blue-700 font-bold h-8 w-8 rounded-sm flex justify-center items-center"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Accordion(props: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [dropDownValue, setDropdownValue] = useState("Class");

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const options: Option[] = [
    {
      label:
        props.travelType === "train"
          ? "Travellers - " + dropDownValue
          : props.travelType === "bus"
          ? "Seats"
          : "Rooms / " + (count2 + count3) + " Peoples",
      count: props.travelType === "train" ? count1 + count2 + count3 : count1,

      setCount: setCount1,
    },
  ];

  const userHotelOptions: Option[] = [
    { label: "Rooms", count: count1, setCount: setCount1 },
    { label: "Adults (12+ yrs)", count: count2, setCount: setCount2 },
    { label: "Children (2-12 yrs)", count: count3, setCount: setCount3 },
  ];

  const userTrainOptions: Option[] = [
    { label: "Adults (12+ yrs)", count: count1, setCount: setCount1 },
    { label: "Children (2-12 yrs)", count: count2, setCount: setCount2 },
    { label: "Infants (Below 2 yrs)", count: count3, setCount: setCount3 },
  ];

  const userBusOptions: Option[] = [
    { label: "Seats", count: count1, setCount: setCount1 },
  ];

  return (
    <div className="bg-white border border-gray-500  rounded-[4px] ">
      {options.map((option, index) => (
        <div
          key={index}
          className=" px-3 flex flex-col justify-center items-center py-2"
        >
          <div
            className="flex justify-between cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <div className="w-[350px]">
              {option.count} {option.label}
              {/* {props.travelType === "hotel"
                ? "Room"
                : props.travelType === "train"
                ? "Traveller"
                : "Seats"} */}
            </div>
            <svg
              className={`w-24 h-6 transition-transform duration-300 ease-in-out transform ${
                index === activeIndex ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            {index === activeIndex && (
              <div className="z-10 absolute shadow-black shadow-2xl  p-3  m-3 bg-white">
                {props.travelType === "hotel" ? (
                  <div className="mt-2">
                    {userHotelOptions.map((option, i) => (
                      <DropdownItem key={i} option={option} />
                    ))}
                  </div>
                ) : props.travelType === "train" ? (
                  <>
                    <div className="mt-2">
                      {userTrainOptions.map((option, i) => (
                        <DropdownItem key={i} option={option} />
                      ))}
                    </div>
                    <select
                      id="dropDown"
                      value={dropDownValue}
                      placeholder="SeDropdownats"
                      onChange={(e) => {
                        setDropdownValue(e.target.value);
                      }}
                      className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
                    >
                      <option value=" All Class" className="text-lg">
                        All Class
                      </option>
                      <option value="First Class" className="text-lg">
                        First Class
                      </option>
                      <option value=" Second Class" className="text-lg">
                        Second Class
                      </option>
                      <option
                        value="First Class Sleeper (SL)"
                        className="text-lg"
                      >
                        First Class Sleeper (SL)
                      </option>
                      <option
                        value="Second Class Sleeper (SL)"
                        className="text-lg font-light"
                      >
                        Second Class Sleeper (SL)
                      </option>
                      <option value=" Business" className="text-lg">
                        Business
                      </option>
                    </select>
                  </>
                ) : (
                  <div className="mt-3">
                    {userBusOptions.map((option, i) => (
                      <DropdownItem key={i} option={option} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
