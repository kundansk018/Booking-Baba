"use client";

import HomeSearch from "@/components/HomeSearch";
import BBAdCarousel from "../components/BBMainCarousel";

export default function Hotel() {
  return (
    <div className="flex flex-row h-fit">
      <HomeSearch
        title="Book Domestic and International Hotels"
        dropDownValue={""}
        to="Mumbai"
        arrivalDate=""
        from="pune"
      />
      {/* <BBAdCarousel/> */}
    </div>
  );
}
