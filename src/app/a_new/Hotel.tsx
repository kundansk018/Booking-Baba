"use client";

import HomeSearch from "@/components/HomeSearch";
import BBMainCarousel from "../components/BBMainCarousel";


interface Props {
  type?: any;
}

export default function Hotel(props: Props) {
  return (
    <div>
      <div className=" ">
        <div className="">
          <HomeSearch
            title="Book Domestic and International Hotels"
            travelType={props.type}
          />
        </div>
     
        {/* <BBAdCarousel/> */}
      </div>
    </div>
  );
}
