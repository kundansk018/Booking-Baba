"use client";

import HomeSearch from "@/components/HomeSearch";

export default function Bus() {
  return (
    <div>
      <HomeSearch
        title="Book Bus Tickets"
        dropDownValue={""}
        to="Mumbai"
        arrivalDate=""
        from="pune"
        
      />
    </div>
  );
}
