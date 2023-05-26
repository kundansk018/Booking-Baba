import Link from "next/link";

import booking from "../images/booking.png";
import Image from "next/image";

export default function Home() {
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

      <Link href="/auth">
        <h1>Sign Up</h1>
      </Link>
      {/* <Link href="/AdminDashboard">
        <h1>Dashboard</h1>
      </Link> */}
    </main>
  );
}
