import Image from "next/image";
import Link from "next/link";

import Navbar1 from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/auth">
        <h1>Sign Up</h1>
      </Link>
      {/* <Link href="/AdminDashboard">
        <h1>Dashboard</h1>
      </Link> */}
    </main>
  );
}
