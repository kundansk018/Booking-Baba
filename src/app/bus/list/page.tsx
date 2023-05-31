// "use client";
// import React from "react";

// import { Card, Typography } from "@material-tailwind/react";

// const TABLE_HEAD = ["Name", "Timing", "Date", "Route", "Photo", "Remove"];

// const TABLE_ROWS = [
//   {
//     name: "A",
//     timing: "6:00AM",
//     date: "23/04/18",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "B ",
//     timing: "6:00AM",
//     date: "23/04/18",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "C ",
//     timing: "6:00AM",
//     date: "19/09/17",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "D ",
//     timing: "6:00AM",
//     date: "24/12/08",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
//   {
//     name: "E",
//     timing: "6:00AM",
//     date: "04/10/21",
//     route: "Nashik to Pune",
//     photo: "",
//   },
// ];

// export default function Buslist() {
//   return (
//     <>
//       <h3 style={{ fontSize: 30, textAlign: "center" }}>
//         <b>Available Buses</b>
//       </h3>
//       <Card className="overflow-scroll h-full w-full p-1">
//         <table className="w-full min-w-max table-auto text-left ">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head) => (
//                 <th
//                   key={head}
//                   className="border-b border-blue-gray-100 bg-blue-gray-50 p-6"
//                 >
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal leading-none opacity-90"
//                   >
//                     <b> {head}</b>
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {TABLE_ROWS.map(({ name, timing, date, route, photo }, index) => {
//               const isLast = index === TABLE_ROWS.length - 1;
//               const classes = isLast
//                 ? "p-10"
//                 : "p-10 border-b border-blue-gray-50";

//               return (
//                 <tr key={name}>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {name}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {timing}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {date}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       as="a"
//                       href="#"
//                       variant="small"
//                       color="blue"
//                       className="font-medium"
//                     >
//                       {route}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal"
//                     >
//                       {photo}
//                     </Typography>
//                   </td>
//                   <td className={classes}>
//                     <Typography
//                       as="a"
//                       href="#"
//                       variant="small"
//                       color="blue"
//                       className="font-medium"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                         />
//                       </svg>
//                     </Typography>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </Card>
//     </>
//   );
// }
