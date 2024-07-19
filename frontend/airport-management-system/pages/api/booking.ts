import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { flightId, passengerId } = req.body;

    // Validate request body
    if (!flightId || !passengerId) {
      res.status(400).json({ error: 'Flight ID and Passenger ID are required.' });
      return;
    }

    try {
      const query = `
        INSERT INTO bookings (flight_id, passenger_id)
        VALUES ($1, $2)
        RETURNING booking_id;
      `;
      const values = [flightId, passengerId];

      const result = await db.query(query, values);
      const bookingId = result.rows[0].booking_id;

      res.status(201).json({ bookingId });
    } catch (error) {
      console.error('Error inserting into database:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
