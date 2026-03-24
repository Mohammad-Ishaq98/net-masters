"use client";

import { useState } from "react";

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
];

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select date and time");
      return;
    }

    alert(`Booked on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-black">Book Your Court</h2>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-500">
          Select Date
        </label>
        <input
          type="date"
          className="w-full border p-2 rounded text-black"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Time Slots */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-black">Select Time</label>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`p-2 rounded border text-sm ${
                selectedTime === time
                  ? "bg-green-500 text-black"
                  : "bg-gray-800"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBooking}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Book Now
      </button>
    </div>
  );
}
