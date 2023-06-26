"use client";

import HomeSearch from "@/components/HomeSearch";
import BAdCarousel from "../components/BAdCarousel";

interface Props {
  type?: any;
}

export const Bus: React.FC<Props> = ({ type }) => {
  return (
    <div className="flex flex-row">
      <HomeSearch title="Book Bus Tickets" travelType={type} />
      <BAdCarousel />
    </div>
  );
};
