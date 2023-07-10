"use client"
import react from "react";
import {MdLocationOn } from 'react-icons/md';

interface Props {
  header: any;
  subHeader: any;
  address?:any;
}
export default function UHeader(props: Props) {
  return (
    <>
      <div className="bg-headcolor py-10 text-white text-[32px] ">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center">
          <div>
          <div className="text-[32px]">{props.header}</div>
          {props?.address && <div className="text-[14px] flex"><MdLocationOn className="mt-1 mr-1 text-[14px]"/>{props.address}</div>}
          </div>
        
          <div className="text-[13px]">{props.subHeader}</div>
        </div>
      </div>
    </>
  );
}
