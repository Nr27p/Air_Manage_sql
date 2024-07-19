
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Flight {
  flight_number: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  status: string;
}

const FlightForm: React.FC = () => {
  const [flight, setFlight] = useState<Flight>({
    flight_number: '',
    origin: '',
    destination: '',
    departure_time: '',
    arrival_time: '',
    status: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlight(prevFlight => ({
      ...prevFlight,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flight),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to submit flight data: ${errorText}`);
      }

      setFlight({
        flight_number: '',
        origin: '',
        destination: '',
        departure_time: '',
        arrival_time: '',
        status: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Flight</h2>
      <form onSubmit={handleSubmit} className="flight-form">
        <div className="form-group">
          <label htmlFor="flight_number">Flight Number</label>
          <input
            type="text"
            id="flight_number"
            name="flight_number"
            placeholder="Flight Number"
            value={flight.flight_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input
            type="text"
            id="origin"
            name="origin"
            placeholder="Origin"
            value={flight.origin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
            value={flight.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departure_time">Departure Time</label>
          <input
            type="datetime-local"
            id="departure_time"
            name="departure_time"
            value={flight.departure_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrival_time">Arrival Time</label>
          <input
            type="datetime-local"
            id="arrival_time"
            name="arrival_time"
            value={flight.arrival_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            placeholder="Status"
            value={flight.status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Flight</button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }

        .form-title {
          color: #333333;
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: 600;
        }

        .flight-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          color: #555555;
          font-weight: 500;
          margin-bottom: 5px;
          font-size: 16px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          color: black;
          border: 1px solid #cccccc;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 16px;
        }

        .form-group input:focus {
          border-color: #0070f3;
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 112, 255, 0.2);
        }

        .submit-button {
          background-color: #0070f3;
          color: #ffffff;
          border: none;
          padding: 12px 20px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }

        .submit-button:hover {
          background-color: #005bb5;
          transform: scale(1.05);
        }

        .submit-button:active {
          background-color: #004494;
        }
      `}</style>
    </div>
  );
};

export default FlightForm;
