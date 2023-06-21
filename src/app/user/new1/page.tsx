"use client"
import { useState } from 'react';



const FilterPage = () => {
    const [departureTimeRange, setDepartureTimeRange] = useState([0, 1439]);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [busTypes, setBusTypes] = useState();
    const [busOperators, setBusOperators] = useState();

    const handleDepartureTimeSliderChange = (event: any) => {
        const range = event.target.value.split(',').map(Number);
        setDepartureTimeRange(range);
    };

    const handlePriceSliderChange = (event: any) => {
        const range = event.target.value.split(',').map(Number);
        setPriceRange(range);
    };

    const handleBusTypeChange = (event: any) => {
        const { value } = event.target;
        setBusTypes(value);
    };

    const handleBusOperatorChange = (event: any) => {
        const { value } = event.target;
        setBusOperators(value);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Filter Bus List</h1>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Departure Time</h2>
                <input
                    type="range"
                    min={0}
                    max={1439}
                    step={1}
                    value={`${departureTimeRange[0]},${departureTimeRange[1]}`}
                    onChange={handleDepartureTimeSliderChange}
                    className="w-full"
                />
                <div className="flex justify-between">
                    <span>00:00</span>
                    <span>23:59</span>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Price</h2>
                <input
                    type="range"
                    min={0}
                    max={1000}
                    step={1}
                    value={`${priceRange[0]},${priceRange[1]}`}
                    onChange={handlePriceSliderChange}
                    className="w-full"
                />
                <div className="flex justify-between">
                    <span>$0</span>
                    <span>$1000</span>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Bus Types</h2>
                <select
                    value={busTypes}
                    onChange={handleBusTypeChange}
                    className="w-full"
                >
                    <option value="">Select Bus Type</option>
                    <option value="sleeper">Sleeper</option>
                    <option value="nonSleeper">Non-Sleeper</option>
                </select>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Bus Operators</h2>
                <select
                    value={busOperators}
                    onChange={handleBusOperatorChange}
                    className="w-full"
                >
                    <option value="">Select Bus Operator</option>
                    <option value="acTravels">AC Travels</option>
                    <option value="noAcTravels">No AC Travels</option>
                </select>
            </div>
        </div>
    );
};

export default FilterPage;

