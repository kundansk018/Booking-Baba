"use client";

import HomeSearch from "@/components/HomeSearch";

interface Props {
  type?: any;
}

export default function Train(props: Props) {
  return (
    <div>
      <HomeSearch title="Book Train Tickets" travelType={props.type} />
    </div>
  );
}
