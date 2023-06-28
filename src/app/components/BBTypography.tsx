import { Typography } from "@material-tailwind/react";
import React from "react";

interface Props {
  variant?: string;
  color?: string;
  className?: string;
  text?: string;
  children?: any;
}

export default function BBTypography(props: Props) {
  return (
    <Typography
      variant={props.variant}
      color={props.color}
      className={props.className}
    >
      {props.text} {props.children}
    </Typography>
  );
}
