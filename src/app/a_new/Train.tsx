"use client";

import HomeSearch from "@/components/HomeSearch";

export default function Train() {
  return (
    <div>
      <HomeSearch
        title="Book Train Tickets"
        dropDownValue={""}
        to="Mumbai"
        arrivalDate=""
        from="pune"
      />
    </div>
  );
}
