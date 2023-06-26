"use client";

import HomeSearch from "@/components/HomeSearch";
import BAdCarousel from "../components/BAdCarousel";

interface Props {
  type?: any;
}

export default function Train(props: Props) {
  return (
    <div className="flex flex-row">
      <HomeSearch title="Book Train Tickets" travelType={props.type} />
      <BAdCarousel />
    </div>
  );
}
