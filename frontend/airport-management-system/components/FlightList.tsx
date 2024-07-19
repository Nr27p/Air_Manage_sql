

import React, { useState, useEffect } from 'react';

interface Flight {
  id: number;
  flight_number: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  status: string;
}

interface FlightListProps {
  refresh: boolean;
}

const FlightList: React.FC<FlightListProps> = ({ refresh }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/flights');
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch flights: ${errorText}`);
        }
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [refresh]);

  return (
    <div className="flights-list">
      <h2>Flight List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id} className="flight-item">
              <div>
                <strong>Flight Number:</strong> {flight.flight_number}
              </div>
              <div>
                <strong>Origin:</strong> {flight.origin}
              </div>
              <div>
                <strong>Destination:</strong> {flight.destination}
              </div>
              <div>
                <strong>Departure Time:</strong> {new Date(flight.departure_time).toLocaleString()}
              </div>
              <div>
                <strong>Arrival Time:</strong> {new Date(flight.arrival_time).toLocaleString()}
              </div>
              <div>
                <strong>Status:</strong> {flight.status}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available</p>
      )}

      <style jsx>{`
        .flights-list {
          margin-top: 20px;
        }

        .flight-item {
          padding: 10px;
          border: 1px solid #ddd;
          margin-bottom: 10px;
          border-radius: 4px;
        }

        .flight-item div {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default FlightList;
