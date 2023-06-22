import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import moment from 'moment';
import 'moment-timezone';

function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle booking submission goes here
    setShowAlert(true);
    setStartDate(new Date());
    setStartTime('');
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
      {showAlert && (
        <SweetAlert
          success
          title="Booking Successful"
          onConfirm={() => setShowAlert(false)}
        >
          Your booking has been confirmed.
        </SweetAlert>
      )}
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date-picker"
          >
            Date
          </label>
          <DatePicker
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="start-time"
          >
          Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start-time"
            type="time"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-400 rounded-lg font-semibold text-center w-full text-white py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
