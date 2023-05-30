"use client"
import React from 'react'
// import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import BBButton from '../components/BBButton';
import { useRouter } from 'next/navigation';

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
];

export default function Hotels() {

   const router = useRouter();
  return (
    <Card className="mx-3 h-[500px] w-[98%] mt-[2%]">
      <CardHeader
        floated={false}
        shadow={false}
        className=" rounded-none"
        // h-[370px]
      >
        
        <div className="flex items-center justify-center">
          <Typography variant="h4" color="blue-gray">
            Hotels list
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <Button
            className="flex items-center gap-3"
            color="blue"
            size="md"
            onClick={() => router.push("/hotels/add")}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Hotels
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-1 mt-0">
        <table className="mt-1 w-full min-w-max table-auto text-left">
          <thead className="bg-blue-gray-100 py-2 font-bold text-black flex-col">
            <tr>
              <th className="w-[5px]">Hotel Photos</th>
              <th className="w-[5px]">Hotel Name</th>
              <th className="w-[5px]">Hotel Owner</th>
              <th className="w-[5px]">Contact No</th>
              <th className="w-[5px]">Email</th>
              <th className="w-[5px]">Adress Line1</th>
              <th className="w-[5px]">Adress Line2 & Street</th>
              <th className="w-[5px]">City </th>
              <th className="w-[5px]">PinCode</th>
              <th className="w-[5px]">Country</th>
              <th className="w-[5px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

{/* <td className="">
  <Tooltip content="Edit User">
    <IconButton variant="text" color="blue-gray">
      <PencilIcon className="h-4 w-4" />
    </IconButton>
  </Tooltip>
</td>; */}