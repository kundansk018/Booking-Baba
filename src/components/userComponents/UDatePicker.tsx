import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  type?: string;
  id?: any;
  required?: boolean;
  selected?: any;
  minDate?: any;
  value?: string;
  placeholder?: string | any;
  className?: any;
  onChange?: any;
  style?: any;
  label?: any;
}

export default function UDatePicker(props: Props) {
  return (
    <DatePicker
      id="arrivalDate"
      placeholderText={props.placeholder}
      minDate={props.minDate}
      selected={props.selected}
      onChange={props.onChange}
      className={props.className}
      // className="w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[12px] px-[14.5px]"
    />
  );
}
