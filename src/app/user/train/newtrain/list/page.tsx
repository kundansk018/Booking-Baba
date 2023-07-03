"use client";
import React from "react";
import { useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import FilterPage from "../page";
import HomeSearch from "@/components/HomeSearch";
import UHeader from "@/components/userComponents/UHeader";
import { CustomModal } from "@/components/CustomModal";
import TrainData from "./trainModal";
import BBTypography from "@/app/components/BBTypography";
import { TABLE_HEAD, TABLE_ROWS } from "@/utils/TrainData";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { getTrainById } from "@/redux/action/trainAction";
import SearchComponent from "@/components/SearchComponent";

interface Props {
  type?: any;
}

export default function Page() {
  const [type, setType] = useState("train");
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const trainData: any = useSelector(
    (state: any) => state.train.userTrainDetails
  );
  console.log("Train data is in list page ..", trainData);

  let from = trainData?.data[0]?.from_Stn;
  const to = trainData?.data[0]?.to_Stn;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (id: any) => {
    setShowModal(true);
    dispatch(getTrainById(id));
  };

  return (
    <>
      <UHeader
        header="Trains - List Page"
        subHeader="Home > Trains > Trains List Page"
      />
      <div className="max-w-screen-xl mx-auto">
        <div className="my-5">
          <SearchComponent travelType={type} />
        </div>
        <Card className="overflow-scroll h-full w-full flex-row gap-5">
          <div className="">
            <FilterPage />
          </div>
          <div>
            <div className="font-sans serif text-xl mb-4 pl-10 pt-3 text-center">
              {from} To {to}
            </div>
            <table className="mx-auto border border-gray-300 w-[133%] table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <BBTypography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </BBTypography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {trainData?.data.map((element: any, index: any) => {
                  const isLast = index === TABLE_ROWS.length - 1;

                  return (
                    <tr key={index}>
                      <td className="text-center p-4 border-b border-blue-gray-50">
                        <BBTypography variant="small">
                          <span className="font-poppins text-base">
                            {element.trainName}
                          </span>
                          <br />
                          <span className="text-blue-gray">
                            {element.trainNo}
                          </span>
                        </BBTypography>
                      </td>
                      <td className="text-center p-4 border-b border-blue-gray-50">
                        <BBTypography variant="small">
                          <span className="text-xl">{element.depTime}</span>
                          <br />
                          <span className="text-sm">
                            {element.from_Stn}
                            <br />
                            {element.depDate}
                          </span>
                        </BBTypography>
                      </td>
                      <td className="text-center p-4 border-b border-blue-gray-50">
                        <BBTypography variant="small">
                          <span className="text-sm text-blue-gray">
                            {element.duration}
                          </span>
                          <br />
                          <span className="text-xs text-blue-gray">
                            {element.stops} Stops
                          </span>
                        </BBTypography>
                      </td>
                      <td className="text-center p-4 border-b border-blue-gray-50">
                        <BBTypography variant="small">
                          <span className="text-xl">{element.arrivalTime}</span>
                          <br />
                          <span className="text-xs text-blue-gray">
                            {element.to_Stn}
                            <br />
                            {element.arrDate}
                          </span>
                        </BBTypography>
                      </td>
                      <td className="text-center p-4 border-b border-blue-gray-50">
                        {showModal ? (
                          <CustomModal
                            children={<TrainData />}
                            showModalHeader={true}
                            modalHeader="Train Details"
                            isFlexible={true}
                            topRightCloseButtonID="x-"
                            showModal={true}
                            showBackButton={true}
                            showBBPSLogo={true}
                            handleBackClick={handleCloseModal}
                          />
                        ) : null}

                        <Button
                          variant="outlined"
                          style={{ color: "#0071cc;", fontSize: "14px" }}
                          // color="lightBlue"
                          // size="regular"
                          onClick={() => handleChange(element._id)}
                        >
                          <span className="font-sans text-sm">
                            Check Availability
                          </span>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
