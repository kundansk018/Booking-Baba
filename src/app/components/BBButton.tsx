import { Button } from "@material-tailwind/react";
import React from "react";

interface button {
  label: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void; // for function type
  size: "sm" | "lg" | "md";
  color?: any;
  className?: string;
}

export default function BBButton(props: button) {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      color={props.color || "blue"}
      size={props.size}
      className={props.className}
    >
      {props.label}
    </Button>
  );
}
