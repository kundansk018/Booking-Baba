"use client";
import Link from "next/link";

import booking from "../images/booking.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import react, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/auth");
    }, 10000);
  });

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between "
      style={{ backgroundImage: `url("../images/booking.png")` }}
    >
      {/* <Image
        className="h-full w-full"
        src={booking}
        alt="Multi-services-booking"
      /> */}

      {/* <Link href="/auth">
        <h1>Sign Up</h1>
      </Link> */}

      {/* <h1>Loading...</h1> */}

      {/* <Link href="/AdminDashboard">
        <h1>Dashboard</h1>
      </Link> */}

      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </main>
  );
}
