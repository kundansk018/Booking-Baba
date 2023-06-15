import { Input } from "@material-tailwind/react";
import React from "react";

interface Props {
  label: string;
  value?: string;
  type?: string;
  className?: string;
  onChange: (e: any) => void; // for function type
  containerProps?: any;
  color?: any;
}

export default function BBInput(props: Props) {
  return (
    <Input
      label={props.label}
      value={props.value}
      type={props.type}
      color="blue"
      //   className="bg-sky-500 hover:bg-sky-700"
      onChange={props.onChange}
      containerProps={
        props.containerProps
          ? props.containerProps
          : {
              className: "min-w-[30px] bg-sky-500 hover:bg-sky-700 ",
            }
      }
    />
  );
}
