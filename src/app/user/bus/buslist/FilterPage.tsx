"use client"
import { Accordion, AccordionBody, AccordionHeader, } from '@material-tailwind/react';
import { useState } from 'react';



export default function FilterPage() {
    const [departureTime, setDepartureTime] = useState([1439, 0]);
    const [price, setPrice] = useState(0);
    const [sleeper, setSleeper] = useState(false)
    const [seater, setSeater] = useState(false)
    const [semiseater, setSemiSeater] = useState(false)
    const [akTourTravels, setAkTourTravels] = useState(false);
    const [vikasTravels, setVikasTravels] = useState(false);
    const [gujaratTravels, setGujaratTravels] = useState(false);
    const [shrinathTravelAgency, setShrinathTravelAgency] = useState(false);
    const [indianTravelsAgency, setIndianTravelsAgency] = useState(false);

    function Icon({ id, open }: any) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }

    const [open, setOpen] = useState(0);
    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    }
    const formateTime = (minutes: any) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")
            }`;
    }


    const handleDepartureTimeChange = (values: any) => {
        setDepartureTime(values);
    };
    const handleSliderChange = (event: any) => {
        setPrice(parseInt(event.target.value));
    };


    const handleSleeperChange = () => {
        setSleeper(!sleeper);
    };
    const handleSeaterChange = () => {
        setSeater(!seater);
    };
    const handleSemiSeaterChange = () => {
        setSemiSeater(!semiseater);
    };
    const handleAkTourTravelsChange = () => {
        setAkTourTravels(!akTourTravels);
    };
    const handleGujaratTravelsChange = () => {
        setGujaratTravels(!gujaratTravels);
    };
    const handleShrinathTravelAgencyChange = () => {
        setShrinathTravelAgency(!shrinathTravelAgency);
    };
    const handleIndianTravelsAgencyChange = () => {
        setIndianTravelsAgency(!indianTravelsAgency);
    };
    const handleVikasTravelsChange = () => {
        setVikasTravels(!vikasTravels);
    };




    return (
        <div className="text-2xl font-bold serif fontSize-25px mb-4 pl-10 -mt-2 ">
            <div>
                <h3
                    style={{
                        fontFamily: "Poppins,sans-serif",
                        color: " #0071cc",
                        fontSize: "25px",
                    }}
                > Filter

                </h3>
                <div className="mb-4 ">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className={`Accordion__Header--${open === 1 ? "opened" : "closed"}`}
                            onClick={() => handleOpen(1)}
                        >
                            <h2
                                style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "16px",
                                }}>
                                Departure Time
                            </h2>

                        </AccordionHeader>
                        <AccordionBody>

                            <input
                                type='range'
                                color='#0071cc'
                                min={0}
                                max={1439}
                                value={departureTime[0]}
                                onChange={(e) =>
                                    handleDepartureTimeChange([
                                        parseInt(e.target.value),
                                        departureTime[1]
                                    ])
                                }
                                className='w-full'
                            />
                            <div style={{ fontFamily: "Poppins,sans-serif", color: "#0071cc" }}
                            >
                                <span> {formateTime(departureTime[1])}-</span>
                                <span> {formateTime(departureTime[0])}</span>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>


                <div className="mb-4">
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                        >
                            <h2
                                style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "16px",
                                }}>
                                Price
                            </h2>
                        </AccordionHeader>
                        <AccordionBody>

                            <div className="flex items-center">

                                <input
                                    type="range"
                                    min="0"
                                    max="700"
                                    value={price}
                                    onChange={handleSliderChange}
                                    className="w-full"
                                />
                                <div >

                                    <span className="text-lg mr-4"></span>
                                    <div className=''>${price}</div>
                                </div>
                            </div>
                            <div
                                style={{ fontFamily: "Poppins,sans-serif", color: "#0071cc" }}
                            >

                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>


                <div>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                        >
                            <h2
                                style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "16px",
                                }}>
                                Bus Type{" "}
                            </h2>

                        </AccordionHeader>
                        <AccordionBody>
                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={sleeper}
                                    onChange={handleSleeperChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",


                                }}>

                                    Sleeper
                                </span>
                            </label>

                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={seater}
                                    onChange={handleSeaterChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                }}>

                                    Seater
                                </span>
                            </label>


                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={semiseater}
                                    onChange={handleSemiSeaterChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                }}>

                                    Semi-Seater
                                </span>
                            </label>

                        </AccordionBody>

                    </Accordion>
                </div>
                <div>
                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                        >
                            <h2
                                style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "16px",
                                }}>
                                Bus Operator{" "}
                            </h2>

                        </AccordionHeader>
                        <AccordionBody>
                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={akTourTravels}
                                    onChange={handleAkTourTravelsChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",


                                }}>

                                    AK Tour & Travels
                                </span>
                            </label>

                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={gujaratTravels}
                                    onChange={handleGujaratTravelsChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                }}>
                                    Gujarat Travels

                                </span>
                            </label>


                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={shrinathTravelAgency}
                                    onChange={handleShrinathTravelAgencyChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                }}>

                                    Shrinath Travel Agency
                                </span>
                            </label>

                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={indianTravelsAgency}
                                    onChange={handleIndianTravelsAgencyChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                }}>

                                    Indian Travel Agency
                                </span>
                            </label>

                            <label className='flex items-center space-x-2'>
                                <input
                                    type='checkbox'
                                    checked={vikasTravels}
                                    onChange={handleVikasTravelsChange} />

                                <span style={{
                                    fontFamily: "Poppins,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                }}>
                                    Vikas Travel Agency

                                </span>
                            </label>


                        </AccordionBody>

                    </Accordion>
                </div>
            </div>
        </div>
    )
};


