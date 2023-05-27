"use client";

import { Provider } from "react-redux"
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "@/redux/store";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Provider store={store}>
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}

