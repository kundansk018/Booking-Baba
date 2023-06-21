// "use client"
// import { Fragment, useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// function Icon({ id, open }: any) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`${
//         id === open ? "rotate-180" : ""
//       } h-5 w-5 transition-transform`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );
// }

// export default function Example() {
//   const [open, setOpen] = useState(0);

//   const handleOpen = (value: any) => {
//     setOpen(open === value ? 0 : value);
//   };

//   return (
//     <Fragment>
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}>
//           What is Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>

//     </Fragment>
//   );
// }
"use client"
// import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
// import React, { useState } from "react";
// import MultiRangeSlider from "multi-range-slider-react";
// function App() {
//   const [minValue, set_minValue] = useState(25);
//   const [maxValue, set_maxValue] = useState(75);
//   const handleInput = (e:any) => {
//     set_minValue(e.minValue);
//     set_maxValue(e.maxValue);
//   };

//   return (
//     <div className="App">
//       <MultiRangeSlider
//         min={0}
//         max={100}
//         step={5}
//         minValue={minValue}
//         maxValue={maxValue}
//         onInput={(e) => {
//           handleInput(e);
//         }}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const BidirectionalSlider = () => {
  // const [value, setValue] = useState(50);

  // const handleChange = (event:any) => {
  //   setValue(event.target.value);
  // };

  // const handleKeyDown = (event:any) => {
  //   const currentValue = Number(value);
  //   let updatedValue;

  //   if (event.keyCode === 38 || event.keyCode === 39) {
     
  //     updatedValue = currentValue + 1;
  //   } else if (event.keyCode === 37 || event.keyCode === 40) {
   
  //     updatedValue = currentValue - 1;
  //   }

    // Clamp value between 0 and 100
    // setValue(Math.min(Math.max(updatedValue, 0), 100));
  // };

  return (
    <div className="accordion accordion-flush style-2 mt-n3" id="toggleAlternate">
    <div className="accordion-item">
      <h2 className="accordion-header" id="departure">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#toggleDeparture" aria-expanded="true" aria-controls="toggleDeparture">Departure Time</button>
      </h2>
      <div id="toggleDeparture" className="accordion-collapse collapse show" aria-labelledby="departure">
        <div className="accordion-body">
          <p><span className="slider-time-departure">00:00</span> - <span className="slider-time-departure">23:59</span></p>
          <div id="slider-range-departure"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

