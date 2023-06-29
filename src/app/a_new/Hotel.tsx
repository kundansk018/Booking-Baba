"use client";

import HomeSearch from "@/components/HomeSearch";
import BBMainCarousel from "../components/BBMainCarousel";
import BAdCarousel from "../components/BAdCarousel";
import UFeatures from "@/components/userComponents/UFeatures";

interface Props {
  type?: any;
}

export default function Hotel(props: Props) {
  return (
    <div>
      <div className=" ">
        <div className="flex flex-row">
          <div className="w-[45%]">
            <HomeSearch
              title="Book Domestic and International Hotels"
              travelType={props.type}
            />
          </div>
          <div className="w-[55%]">
            <BAdCarousel />
          </div>
        </div>
        <div className=" mb-10">
          <UFeatures
            title="Why Choose Us"
            subtitle="Book Hotels Online. Save Time and Money!"
            travelType={props.type}
          />
        </div>
      </div>
    </div>
  );
}
