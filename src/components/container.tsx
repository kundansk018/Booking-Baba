import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Navigationbar from "@/app/components/Navbar";

interface ContainerProps {
  children: any;
}

const Container = (props: ContainerProps) => {
  // console.log("Window Location ", window.location.pathname);
  const loading: boolean = useSelector((state: any) => state.app.loading);
  return (
    <div className="relative">
      {!["/auth", "/"].includes(window.location.pathname) && <Navigationbar />}
      {props.children}
      <>
        {loading ? (
          <div className="absolute top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30">
            <Spinner className="h-12 w-12" />
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Container;
