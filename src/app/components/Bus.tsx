"use client";

import HomeSearch from "@/components/HomeSearch";
import BAdCarousel from "./BAdCarousel";
import UFeatures from "@/components/userComponents/UFeatures";

interface Props {
  type?: any;
}

export default function Bus(props: Props) {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-[45%]">
          <HomeSearch title="Book Bus Tickets" travelType={props.type} />
        </div>
        <div className="w-[55%]">
          <BAdCarousel travelType={props.type} />
        </div>
      </div>
      <div>
        <UFeatures
          title="Why Book Bus with Booking Baba"
          subtitle="Book Bus Tickets Online. Save Time and Money!"
          travelType={props.type}
        />
      </div>
    </div>
  );
}
