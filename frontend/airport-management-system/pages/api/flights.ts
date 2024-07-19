// // src/pages/api/flights.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import db from '../../lib/db';  // Use default import
 

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     try {
//       const { rows } = await db.query('SELECT * FROM Flights');
//       res.status(200).json(rows);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else if (req.method === 'POST') {
//     const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;
//     try {
//       const result = await db.query(
//         'INSERT INTO Flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//         [flight_number, origin, destination, departure_time, arrival_time, status]
//       );
//       res.status(201).json(result.rows[0]);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import type { NextApiRequest, NextApiResponse } from 'next';
// import db from '../../lib/db';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  

//   if (req.method === 'POST') {
//     const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;

//     // Validate input
//     if (!flight_number || !origin || !destination || !departure_time || !arrival_time || !status) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//       const result = await db.query(
//         'INSERT INTO Flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//         [flight_number, origin, destination, departure_time, arrival_time, status]
//       );

//       res.status(201).json(result.rows[0]);
//     } catch (error) {
//       console.error('Error inserting flight:', error); // Log the error for debugging
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     // Handle other methods
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// pages/api/flights/create.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;
        const result = await db.query(
            'INSERT INTO flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [flight_number, origin, destination, departure_time, arrival_time, status]
        );
        res.status(201).json(result.rows[0]);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

