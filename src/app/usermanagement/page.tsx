"use client";
import { Card } from "@material-tailwind/react";
import React from "react";

export default function page() {
  return (
    <div>
      <h4 className="my-2 font-castoro font-bold bg-white p-5">
        User Management
      </h4>
      <div className=" my-2 flex h-[100px] w-full justify-between">
        <Card className="w-1/2 bg-gray-100 h-12">
            Admin
        </Card>
        <Card className="w-1/2 bg-gray-100 h-12">
            

        </Card>
      </div>
    </div>
  );
}
