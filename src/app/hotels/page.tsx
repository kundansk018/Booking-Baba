"use client"
import React from 'react'
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import BBButton from '../components/BBButton';
 
const TABLE_HEAD = ["Hotel Name", "Owner", "Contact","Services","Adress","Edit/Delete"];
 
const TABLE_ROWS = [
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking kids",
    address:"ashok Stambh nsk"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking swimming pool kids",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking kids",
    address:"ashok Stambh nsk"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking swimming pool kids",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking",
    address:"nashik dwarka"


  },
  {
    hotelname: "John Michael",
    owner: "Manager",
    contact: "23/04/18",
    services:"dinner,lunch,parking",
    address:"nashik dwarka"


  },
];
 
export default function Hotels() {
  return (
    <Card>

      <Card className="mt-[4%] w-full">
        <table className="w-full min-w-max table-auto text-left">
          <tbody>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </tbody>
          </table>
          </Card>
      <Card className="overflow-scroll h-[400px] w-full">
        <table className="w-full min-w-max table-auto ">
          {/* <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead> */}
          <tbody>
            {TABLE_ROWS.map(
              ({ hotelname, owner, contact, services, address }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={hotelname}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {hotelname}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {owner}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contact}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {services}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {address}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Button variant="text">Edit</Button>
                      <Button variant="text">Delete</Button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </Card>
  );
}