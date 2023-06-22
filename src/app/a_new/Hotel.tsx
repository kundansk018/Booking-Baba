"use client";

import HomeSearch from "@/components/HomeSearch";

interface Props {
  type?: any;
}

export default function Hotel(props: Props) {
  return (
    <div className="flex flex-row h-fit">
      <HomeSearch
        title="Book Domestic and International Hotels"
        travelType={props.type}
      />
      {/* <BBAdCarousel/> */}
    </div>
  );
}
