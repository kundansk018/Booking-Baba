"use client";

import React from "react";
import { useSelector } from "react-redux";
import Navigationbar from "@/app/components/Navbar";
import { RotatingLines } from "react-loader-spinner";
import { useRouter } from "next/navigation";

interface ContainerProps {
  children: any;
}

const Container = (props: ContainerProps) => {
  // console.log("Window Location ", window.location.pathname);
  const loading: boolean = useSelector((state: any) => state.app.loading);
  const router = useRouter();

  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in container Page  ..", userData);

  // useEffect(() => {
  //   setPathname(window?.location?.pathname);
  console.log("userData.rollType-----", userData?.data?.data?.rollType);
  // }, []);
  return (
    <div className="relative">
      {userData?.data?.data?.rollType === 2 ? <Navigationbar /> : ""}
      {userData?.data?.data?.rollType === 2 ? "" : router.push("/auth")}
      {/* {!["/auth", "/"]?.includes(window?.location?.pathname) && (
        <Navigationbar />
      )} */}
      {/* 
      {!["/auth", "/"]?.includes(pathname) && <Navigationbar />}  */}
      {props.children}
      <>
        {loading ? (
          <div className="absolute  z-50 flex h-full w-full top-0 justify-center items-center bg-white bg-opacity-25 ">
            {/* <Spinner className="h-12 w-12" /> */}
            {/* <RotatingLines
              strokeColor="green"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            /> */}
            <div className="w-fit h-fit border-[6px] border-blue-500 p-2 rounded-full border-x-transparent animate-spin ">
              <div
                className="w-fit h-fit rounded-full animate-spin
                     border-[25px] border-solid border-x-blue-500 border-y-gray-100  "
              ></div>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Container;
