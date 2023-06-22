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

export default function UInput(props: Props) {
  return (
    <input
      required={props.required}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={props.className}
      style={props.style}
    >
      {props.label}
    </input>
  );
}
