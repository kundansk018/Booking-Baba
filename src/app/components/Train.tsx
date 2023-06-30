"use client";

import HomeSearch from "@/components/HomeSearch";
import BAdCarousel from "./BAdCarousel";
import UFeatures from "@/components/userComponents/UFeatures";

interface Props {
  type?: any;
}

export default function Train(props: Props) {
  return (
    <div>
      <div className="flex flex-row">
        <HomeSearch title="Book Train Tickets" travelType={props.type} />
        <BAdCarousel />
      </div>
      <div>
        <UFeatures
          title="Why Book Trains with Booking Baba"
          subtitle="Book Train Tickets Online. Save Time and Money!"
          travelType={props.type}
        />
      </div>
    </div>
  );
}
