"use client";

import HomeSearch from "@/components/HomeSearch";
import BBMainCarousel from "./BBMainCarousel";
import BAdCarousel from "./BAdCarousel";

interface Props {
  type?: any;
}

export default function Hotel(props: Props) {
  return (
    <div>
      <div className=" ">
        <div className="flex flex-row">
          <HomeSearch
            title="Book Domestic and International Hotels"
            travelType={props.type}
          />
          <BAdCarousel />
        </div>
      </div>
    </div>
  );
}
