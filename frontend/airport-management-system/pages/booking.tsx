"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Booking = () => {
  const router = useRouter();
  const [flightId, setFlightId] = useState<number | null>(null);
  const [passengerId, setPassengerId] = useState<number | null>(null);

  // Hardcoded data for flights and passengers
  const flights = [
    { flight_id: 1, flight_name: 'Flight 101' },
    { flight_id: 2, flight_name: 'Flight 202' },
    { flight_id: 3, flight_name: 'Flight 303' }
  ];

  const passengers = [
    { passenger_id: 1, name: 'John Doe' },
    { passenger_id: 2, name: 'Jane Smith' },
    { passenger_id: 3, name: 'Alice Johnson' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (flightId && passengerId) {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flightId, passengerId }),
      });

      if (response.ok) {
        router.push('/booking-success'); // Redirect to a success page after successful booking
      } else {
        console.error('Failed to book the flight');
      }
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Book a Flight</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Flight:</label>
          <select value={flightId || ''} onChange={(e) => setFlightId(Number(e.target.value))} style={styles.input} required>
            <option value="" disabled>Select a flight</option>
            {flights.map((flight) => (
              <option key={flight.flight_id} value={flight.flight_id}>
                {flight.flight_name}
              </option>
            ))}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Passenger:</label>
          <select value={passengerId || ''} onChange={(e) => setPassengerId(Number(e.target.value))} style={styles.input} required>
            <option value="" disabled>Select a passenger</option>
            {passengers.map((passenger) => (
              <option key={passenger.passenger_id} value={passenger.passenger_id}>
                {passenger.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={styles.button}>Book Flight</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  form: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center' as const,
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left' as const,
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Booking;
