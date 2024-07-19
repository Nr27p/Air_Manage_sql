'use client';

import React, { useEffect, useState } from 'react';

interface Flight {
  id: number;
  flight_number: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  status: string;
}

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('/api/flights');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Flight[] = await response.json();
        setFlights(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {flights.map(flight => (
        <li key={flight.id}>
          {flight.flight_number} - {flight.origin} to {flight.destination} ({flight.status})
        </li>
      ))}
    </ul>
  );
};

export default FlightList;
