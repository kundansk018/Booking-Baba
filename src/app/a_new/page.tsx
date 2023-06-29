"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import react, { useState } from "react";

import { FaBed } from "react-icons/Fa";
import { FaTrain } from "react-icons/Fa";
import { FaBus } from "react-icons/Fa";
import Hotel from "./Hotel";
import Train from "./Train";
import Bus from "./Bus";
import UBannerFooter from "@/components/userComponents/UBannerFooter";
import UAA from "@/components/userComponents/UFooter";
import UFooter from "@/components/userComponents/UFooter";
// import Hotel from "./hotel";

export default function Page() {
  const [type, setType] = useState("hotel");

  return (
    <div>
      <div className="">
        <div className=" ">
          <Tabs value={type} className=" ">
            <div className=" !bg-headcolor">
              <TabsHeader
                className="rounded-none !bg-headcolor gap-12 max-w-screen-xl mx-auto w-full pl-[3%] pt-4 pb-0  shadow-none"
                indicatorProps={{
                  className: "rounded-b-none rounded-t-md shadow-none -mx-2 ",
                }}
              >
                <Tab
                  value="hotel"
                  onClick={() => setType("hotel")}
                  className={
                    type === "hotel"
                      ? "text-tabchange w-fit"
                      : "text-tab w-fit "
                  }
                >
                  <span className=" text-sm">
                    <FaBed color="" size="30" title="Hotel" className="mt-2" />
                    <>Hotel</>
                  </span>
                </Tab>
                <Tab
                  value="train"
                  onClick={() => setType("train")}
                  className={
                    type === "train" ? "text-tabchange w-fit" : "text-tab w-fit"
                  }
                >
                  <span className="text-sm ">
                    <FaTrain
                      color=""
                      size="30"
                      title="train"
                      className="mt-2"
                    />
                    Train
                  </span>
                </Tab>
                <Tab
                  value="bus"
                  onClick={() => setType("bus")}
                  className={
                    type === "bus" ? "text-tabchange w-fit" : "text-tab w-fit"
                  }
                >
                  <span className=" text-sm">
                    <FaBus color="" size="30" title="bus" className="mt-2" />
                    Bus
                  </span>
                </Tab>
              </TabsHeader>
            </div>

            <TabsBody className=" max-w-screen-xl mx-auto  rounded-md overflow-auto   container ">
              <TabPanel value="hotel" className="p-0 flex flex-row">
                <Hotel type={type} />
              </TabPanel>
              <TabPanel value="train" className="p-0 flex flex-row">
                <Train type={type} />
              </TabPanel>
              <TabPanel value="bus" className="p-0 flex flex-row">
                <Bus type={type} />
              </TabPanel>
            </TabsBody>
          </Tabs>
          <div className="bg-white flex flex-col justify-center  mb-10">
            <UBannerFooter />
          </div>
          <div className=" max-w-screen-xl mx-auto flex flex-col justify-center  mb-10">
            <UFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
