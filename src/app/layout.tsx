"use client";

import { Provider } from "react-redux"
import "./globals.css";
import { Poppins } from "next/font/google";
import { store } from "@/redux/store";
import Container from "@/components/container";

const poppins = Poppins({ weight:["400"],subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}

