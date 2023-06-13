"use client";
import Link from "next/link";

import booking from "../images/booking.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import react, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import BBMainCarousel from "./components/BBMainCarousel";
import h1 from "../images/hotel/h1.jpg";
import bus1 from "../images/Buses/bus1.png";
import rail from "../images/Trains/rail.jpg";
import Navigationbar from "./components/Navbar";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/auth");
    }, 100000);
  });

  return (
    <div className="">
      <Navigationbar />
      <BBMainCarousel />
      <div className="flex flex-col gap-4">
        <div>
          <Card className="flex flex-row mx-6 w-full h-auto ">
            <CardHeader
              floated={false}
              color="blue-gray"
              className=" h-[400px] w-[600px] "
            >
              <Image
                className="h-[400px] object-cover"
                src={h1}
                alt="Multi-services-booking"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Hotel Booking
              </Typography>
              <Typography>
                Search best prices on hotels,home and much more
              </Typography>
              <Button onClick={() => router.push("/user/hotels")}>
                Book Now
              </Button>
            </CardBody>
            {/* <CardFooter className=" pt-0">
            </CardFooter> */}
          </Card>
        </div>

        <div>
          <Card className="flex flex-row mx-6 w-full h-auto ">
            <CardHeader
              floated={false}
              color="blue-gray"
              className=" h-[400px] w-[600px] "
            >
              <Image
                className="h-[400px] object-cover"
                src={rail}
                alt="Multi-services-booking"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Train Booking
              </Typography>
              <Typography>
                Make Your Train Booking Smoother with Baba-Booking
              </Typography>
              <Button onClick={() => router.push("/user/train")}>
                Book Now
              </Button>
            </CardBody>
            {/* <CardFooter className="pt-0">
            </CardFooter> */}
          </Card>
        </div>

        <div>
          <Card className="flex flex-row mx-6 w-full h-auto ">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="relative h-30"
            >
              <Image
                className="h-[400px] object-cover"
                src={bus1}
                alt="Multi-services-booking"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bus Booking
              </Typography>
              <Typography>
                Make Your Bus Booking Smoother with Baba-Booking
              </Typography>
              <Button onClick={() => router.push("/user/bus")}>Book Now</Button>
            </CardBody>
            {/* <CardFooter className="pt-0">
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
