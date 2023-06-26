import BBButton from "@/app/components/BBButton";
import UInput from "@/components/userComponents/UInput";

import { useState } from "react";
// import InputIcon from "react-multi-date-picker";

import "react-datepicker/dist/react-datepicker.css";
import UDatePicker from "./userComponents/UDatePicker";
import Accordion from "./userComponents/UCounter";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { getTrainBySearch } from "@/redux/action/trainAction";
import { getBusBySearch } from "@/redux/action/busaction";

interface Props {
  from?: string;
  to?: string;
  departDate?: Date | any;
  checkoutDate?: Date | any;
  travelType?: any;
  dropDownValue?: string | any;
  placeholder?: any;
  title?: string;
}

export default function HomeSearch(props: Props) {
  const [from, setFrom] = useState("");
  const [to, SetTo] = useState("");
  const [departDate, setDepartDate] = useState<Date | any>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | any>(null);
  const [dropDownValue, setDropdownValue] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  console.log("from", props.travelType);

  const handleSearch = () => {
    console.log("from nd to ", from, to);
    if (!from && !to) {
      alert("plz enter details");
    } else {
      if (from && to) {
        if (props.travelType === "train") {
          let data = { from_Stn: from, to_Stn: to };
          console.log("Searching for trains:", data);
          dispatch(getTrainBySearch(data)).then((res: any) => {
            console.log("response train ???????????????????????", res);
            router.push("/user/train/list");
          });
        } else if (props.travelType === "hotel") {
        } else {
          let data = { from: from, to: to };
          dispatch(getBusBySearch(data)).then((res: any) => {
            console.log("response  bus     ???????????????????????", res);
            // setShowBox(true);
            router.push("/user/bus/list");
          });
        }
      } else {
        alert("Please Insert Fields");
      }
    }

    const searchData = {
      from,
      to,
      departDate,
      checkoutDate,
      dropDownValue,
    };

   
    console.log("data", searchData);
    console.log("from", props.travelType);
    console.log("gefhgrhrhhrhrhryn r hrhethn", window.location.pathname);
  };

  return (
    <div className="w-full ">
      {window.location.pathname === "/a_new" ? (
        <div className="p-5 bg-white">
          <div className="flex flex-col justify-center  gap-4">
            <div className=" text-lg font-medium text-black">{props.title}</div>
            <div className="flex flex-row gap-5">
              <UInput
                type="text"
                id="from"
                value={from}
                required
                placeholder={
                  props.travelType === "hotel"
                    ? "Enter Locality , City "
                    : "From"
                }
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              />

              {props.travelType === "hotel" ? null : (
                <UInput
                  type="text"
                  id="to"
                  value={to}
                  placeholder="To"
                  onChange={(e) => {
                    SetTo(e.target.value);
                  }}
                />
              )}
            </div>
            {props.travelType === "hotel" ? (
              <div className="flex flex-row justify-between">
                <UDatePicker
                  id="departDate"
                  placeholder="Check In"
                  minDate={new Date()}
                  selected={departDate}
                  onChange={(date: any) => {
                    setDepartDate(date);
                  }}
                  className=" w-full flex-shrink border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
                />

                <UDatePicker
                  id="checkoutDate"
                  placeholder="Check Out"
                  minDate={new Date()}
                  selected={checkoutDate}
                  onChange={(date: any) => {
                    setCheckoutDate(date);
                  }}
                  className="w-full flex-shrink border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
                />
              </div>
            ) : (
              <UDatePicker
                id="departDate"
                placeholder="Depart Date"
                minDate={new Date()}
                selected={departDate}
                onChange={(date: any) => {
                  setDepartDate(date);
                }}
                className=" w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
              />
            )}
            <Accordion travelType={props.travelType} />
            <BBButton
              label="Search"
              type="button"
              onClick={() => handleSearch()}
              className=" w-full text-white text-[14px] bg-blue-600 border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px]"
            ></BBButton>
          </div>
        </div>
      ) : (
        //******************************************************************************************************* */
        <div>
          <div className="flex flex-row  gap-2 text-sm">
            <UInput
              type="text"
              id="from"
              value={from}
              required
              placeholder={
                props.travelType === "hotel" ? "Enter Locality , City " : "From"
              }
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              className="mix-w-fit"
            />
            {props.travelType === "hotel" ? null : (
              <UInput
                type="text"
                id="to"
                value={to}
                placeholder="To"
                onChange={(e) => {
                  SetTo(e.target.value);
                }}
              />
            )}
            {props.travelType === "hotel" ? (
              <>
                <UDatePicker
                  id="departDate"
                  placeholder="Check In"
                  minDate={new Date()}
                  selected={departDate}
                  onChange={(date: any) => {
                    setDepartDate(date);
                  }}
                />

                <UDatePicker
                  id="checkoutDate"
                  placeholder="Check Out"
                  minDate={new Date()}
                  selected={checkoutDate}
                  onChange={(date: any) => {
                    setCheckoutDate(date);
                  }}
                />
              </>
            ) : (
              <UDatePicker
                id="departDate"
                placeholder="Depart Date"
                minDate={new Date()}
                selected={departDate}
                onChange={(date: any) => {
                  setDepartDate(date);
                }}
              />
            )}
            <div>
              <Accordion travelType={props.travelType} />
            </div>

            <BBButton
              label="Search"
              type="button"
              onClick={handleSearch}
            ></BBButton>
          </div>
        </div>
      )}
    </div>
  );
}
