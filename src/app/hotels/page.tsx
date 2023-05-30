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

export default function Hotels() {

   const router = useRouter();
  
   

  return (
    <Card className="mx-3 h-[500px] w-[98%] mt-[2%]">
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[370px] rounded-none"
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
      <CardBody className="overflow-scroll px-0 mt-0">
        <table className="mt-1 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th>Hotel Photos</th>
              <th>Hotel Name</th>
              <th>Hotel Owner</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Adress Line1</th>
              <th>Adress Line2 & Street</th>
              <th>City </th>
              <th>PinCode</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {}
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
