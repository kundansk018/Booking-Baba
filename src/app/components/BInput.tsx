// import { Input } from "@material-tailwind/react";
import react from "react";

interface Props {
  type?: string;
  id?: any;
  required?: boolean;
  value?: string;
  placeholder?: string | any;
  className?: any;
  onChange?: (e: any) => void; // for function type
  style?: any;
  label?: any;
}

export default function BInput(props: Props) {
  return (
    <input
      required={props.required}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={props.className}
      style={props.style}

      //     : { className: "min-w-[30px] border border-gray-300 rounded-md p-2" }
      // }
    >
      {props.label}
    </input>
  );
}
