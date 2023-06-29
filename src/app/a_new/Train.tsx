"use client";

import HomeSearch from "@/components/HomeSearch";
import BAdCarousel from "../components/BAdCarousel";
import UFeatures from "@/components/userComponents/UFeatures";

interface Props {
  type?: any;
}

export default function Train(props: Props) {
  return (
    <div>
      {" "}
      <div className="flex flex-row">
        <div className="w-[45%]">
          <HomeSearch title="Book Train Tickets" travelType={props.type} />
        </div>
        <div className="w-[55%]">
          <BAdCarousel />
        </div>
      </div>
      <div className=" mb-10">
        <UFeatures
          title="  Why Book Trains with Booking Baba"
          subtitle="Book Train Tickets Online. Save Time and Money!"
          travelType={props.type}
        />
      </div>
    </div>
  );
}
