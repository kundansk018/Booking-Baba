"use client"
import { useState } from 'react';

export default function AddBus() {
//    const [busList, setBusList] = useState([]);
//    const [newBus, setNewBus] = useState({
//      busNumber: '',
//      route: '',
//      time: '',
//      seats: '',
//    });

//    const handleInputChange = (e) => {
//      setNewBus({
//        ...newBus,
//        [e.target.name]: e.target.value,
//      });
//    };

//    const handleAddBus = () => {
//      setBusList([...busList, newBus]);
//      setNewBus({
//        busNumber: '',
//        route: '',
//        time: '',
//        seats: '',
//      });
//    };

//    const handleRemoveBus = (index) => {
//      const updatedBusList = [...busList];
//      updatedBusList.splice(index, 1);
//      setBusList(updatedBusList);
//    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bus Ticket Booking</h1>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Bus Number</label>
        <input
          type="text"
          name="busNumber"
       //    value={newBus.busNumber}
       //    onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Route</label>
        <input
          type="text"
          name="route"
       //    value={newBus.route}
       //    onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Time</label>
        <input
          type="text"
          name="time"
       //    value={newBus.time}
       //    onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Seats</label>
        <input
          type="text"
          name="seats"
       //    value={newBus.seats}
       //    onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
       //  onClick={handleAddBus}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Bus
      </button>

      <h2 className="text-xl font-bold mt-8">Bus List</h2>
      </div>
 )    
}