"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
// import { useRouter } from "next/router";

export default function Navigationbar() {
  const userData: any = useSelector((state: any) => state.login.loginDetails);

  const rollType: number = userData?.data.data.rollType;

  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    // <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <ul className="flex flex-col mt-[6px] gap-2 lg:flex-row lg:gap-6">
      <Typography
        as="li"
        variant="small"
        // color="blue-gray"
        className="p-1 font-normal"
        onClick={() => router.push("/auth")} //
      >
        <a href="#" className="flex items-center hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="white-gray"
        className="p-1 font-normal"
        onClick={() => router.push("/help")}
      >
        <a href="#" className="flex items-center text-xl mt-1 hover:text-black">
          Help
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="blue-gray"
        className="p-1 font-normal"
        onClick={() => router.push("/about")}
      >
        <a href="#" className="flex items-center text-xl mt-1 hover:text-black">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="blue-gray"
        className="p-1 font-normal"
        onClick={() => router.push("/user")}
      >
        <a href="#" className="flex items-center text-xl mt-1 hover:text-black">
          User Dashboard
        </a>
      </Typography>
    </ul>
  );

  return (
    <div
      style={{
        boxShadow: "0 0 20px grey",
      }}
      className=" z-50 flex flex-1 m-auto w-[100%] h-[54px] sticky top-0 bg-darkgreen"
    >
      <div className="container flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer  font-medium mx-[20] fixed left-5 top-3 "
        >
          <b className="m-[20] text-2xl">Booking Baba</b>
        </Typography>
        <div
          style={{ position: "fixed", right: 28, top: 0 }}
          className="hidden lg:block"
        >
          {navList}
        </div>

        <IconButton
          variant="text"
          className="fixed right-1 top-1 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="fixed right-10">
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mr-0 bg-darkgreen text-white">{navList}</div>
      </MobileNav>
    </div>
  );
}
