"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  MobileNav,
  Typography,
  IconButton,
  Collapse,
  MenuItem,
  MenuHandler,
  ListItem,
  MenuList,
  Menu,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  ChatBubbleOvalLeftIcon,
  FlagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch } from "@/redux/store";
import { LOGIN_REQUEST_SUCCESS } from "@/redux/constant";

const navListMenuItems = [
  {
    color: "",
    icon: FlagIcon,
    title: "Hotels",
    // onClick={() => router.push("/user")}
    description: "Book hotels on Booking Baba",
  },
  {
    color: "",
    icon: ChatBubbleOvalLeftIcon,
    title: "Trains",
    description: "Book your train tickets from home",
  },
  {
    color: "",
    icon: ChatBubbleOvalLeftIcon,
    title: "Bus",
    description: "Book your bus tickets from home",
  },
];

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm"
          >
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  const onLogOut = () => {
    localStorage.clear();
    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: null });
    router.push("/auth");
  };

  const userData: any = useSelector((state: any) => state.login.loginDetails);

  const rollType: number = userData?.data?.data?.rollType;

  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col mt-[6px] gap-2 lg:flex-row lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
        onClick={() => router.push("/user")}
      >
        <a
          style={{
            font: "sans-serif",
            fontSize: "14px",
            color: "#0c2e53",
          }}
          href="#"
          className="flex items-center text-xl hover:text-black mt-2"
        >
          Home
        </a>
      </Typography>

      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        {/* <MenuHandler> */}
        {/* <Typography
            as="li"
            variant="small"
            className="p-1 font-normal"
            onClick={() => router.push("/user")}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <a
                style={{
                  font: "sans-serif",
                  fontSize: "14px",
                  color: "#0c2e53",
                }}
                href="#"
                className="flex items-center text-xl "
              >
                Booking
              </a>

              <ChevronDownIcon
                strokeWidth={2.5}
                className={` h-3 w-3  ${isMenuOpen ? "" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler> */}

        <MenuList className="lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>

      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
      <div className="flex items-center gap-2 py-2 pr-4">
        <a
          style={{ fontFamily: "Poppins,sans-serif", fontSize: "14px" }}
          href="#"
          className="flex items-center text-black text-xl "
          onClick={() => onLogOut()}
        >
          Log-Out
        </a>
      </div>

      <Typography as="li" variant="small" className="p-1 font-normal">
        <a
          style={{
            font: "sans-serif",
            // fontFamily: "Poppins",
            fontSize: "14px",
            color: "#0c2e53",
          }}
          href="#"
          className="flex items-center text-xl hover:text-black mt-2 -mr-5"
          onClick={() => router.push("/auth")}
        >
          Login / Signup
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
        onClick={() => router.push("/auth")}
      >
        <a href="#" className="flex items-center hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-2.5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      </Typography>
    </ul>
  );

  return (
    <div
      style={{
        boxShadow: "0 0 20px grey",
      }}
      className=" z-50 flex flex-1 m-auto w-[100%] h-[54px] sticky top-0 bg-[#fff]"
    >
      <div className="container flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer  font-medium mx-[20] fixed left-5 top-3 "
        >
          <b
            style={{ fontFamily: "Poppins,sans-serif", color: "#0c2e53" }}
            className="m-[20] text-2xl"
            onClick={() => router.push("/")}
          >
            Booking Baba
          </b>
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
