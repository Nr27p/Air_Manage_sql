// import { useState, useEffect } from 'react';
// import FlightForm from '../components/FlightsForm';

// interface Flight {
//   id: number;
//   flight_number: string;
//   origin: string;
//   destination: string;
//   departure_time: string;
//   arrival_time: string;
//   status: string;
// }

// const Flights: React.FC = () => {
//   const [flights, setFlights] = useState<Flight[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const response = await fetch('/api/flights');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data: Flight[] = await response.json();
//         setFlights(data);
//       } catch (error) {
//         setError(error instanceof Error ? error.message : 'An unexpected error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Flights</h1>
//       <FlightForm />
//       <ul>
//         {flights.map(flight => (
//           <li key={flight.id}>
//             {flight.flight_number} - {flight.origin} to {flight.destination} ({flight.status})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Flights;

// pages/index.tsx
// import { useEffect, useState } from 'react';

// import FlightForm from '../components/FlightsForm';

// interface Flight {
//     flight_id: number;
//     flight_number: string;
//     origin: string;
//     destination: string;
//     departure_time: string;
//     arrival_time: string;
//     status: string;
// }

// const Flight: React.FC = () => {
//     const [flights, setFlights] = useState<Flight[]>([]);

//     useEffect(() => {
//         fetch('/api/flights')
//             .then(response => response.json())
//             .then(data => setFlights(data));
//     }, []);

//     return (
//         <div>
//             <h1>Flights</h1>
//             <FlightForm />
//             <ul>
//                 {flights.map(flight => (
//                     <li key={flight.flight_id}>
//                         {flight.flight_number} from {flight.origin} to {flight.destination} - {flight.status}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Flight;

import { useEffect, useState } from 'react';
import FlightForm from '../components/FlightsForm';
import Link from 'next/link';

interface Flight {
  flight_id: number;
  flight_number: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  status: string;
}

const Flight: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    fetch('/api/flights')
      .then(response => response.json())
      .then(data => setFlights(data));
  }, []);

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url(https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay for better text readability
      color: '#fff', // Text color to ensure it's visible on top of the background
      minHeight: '100vh', // Ensures full-height background
    }}>
      <h1 style={{
        fontSize: '24px',
        marginBottom: '20px',
      }}>Flights</h1>
      <FlightForm />
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto', // Centers the container horizontally
      }}>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
        }}>
          {flights.map(flight => (
            <li key={flight.flight_id} style={{
              marginBottom: '10px',
            }}>
              {flight.flight_number} from {flight.origin} to {flight.destination} - {flight.status}
            </li>
          ))}
        </ul>
      </div>
      <div style={{
        marginTop: '20px',
      }}>
        <Link href="/another-page">
          Go to Another Page
        </Link>
      </div>
    </div>
  );
}

export default Flight;

