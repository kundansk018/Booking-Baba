"use client";

import HomeSearch from "@/components/HomeSearch";

interface Props {
  type?: any;
}

export const Bus: React.FC<Props> = ({ type }) => {
  return (
    <div>
      <HomeSearch title="Book Bus Tickets" travelType={type} />
    </div>
  );
};
