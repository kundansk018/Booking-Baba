"use client";
import React, { useState } from "react";
import Head from "next/head";
import BBInput from "@/app/components/BBInput";
import BBDropdown from "@/app/components/BBDropdown";
import BBButton from "@/app/components/BBButton";

export default function UpdateBusInfo() {
  return (
    <div className=" flex flex-col items-center container mx-auto p-4 bg-white update-form">
      <Head>
        <title>Update Bus Information</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Update Bus Information</h1>

      <div className="mb-4" style={{ width: "50%" }}>
        <BBInput
          label="Bus Number"
          onChange={() => console.log()}
          value=""
          type="text"
        />
      </div>
      {/* <br /> */}

      <div className="w-50 mb-4" style={{ width: "50%" }}>
        <BBDropdown
          options={[{ label: "Nashik" }, { label: "Pune" }]}
          onChange={() => console.log()}
          value=""
          label="From"
        />
        <br />
        <BBDropdown
          options={[{ label: "Nashik" }, { label: "Pune" }]}
          onChange={() => console.log()}
          value=""
          label="To"
        />
      </div>
      {/* <br /> */}

      <div className="mb-4" style={{ width: "50%" }}>
        <BBInput
          label="Time"
          onChange={() => console.log()}
          value=""
          type="text"
        />
      </div>
      {/* <br /> */}

      <div className="mb-4" style={{ width: "50%" }}>
        <BBInput
          label="Seats"
          onChange={() => console.log()}
          value=""
          type="text"
        />
      </div>

      <BBButton
        color=""
        label="Update"
        size="lg"
        className="text-white px-4 py-2 rounded-md bg-blackblue"
      ></BBButton>
    </div>
  );
}
