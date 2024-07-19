import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import db from '../../lib/db';


const saltRounds = 10;



// client.connect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const query = `
        INSERT INTO passengers (first_name, last_name, email, password, phone_number)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING passenger_id;
      `;
      const values = [firstName, lastName, email, hashedPassword, phoneNumber];

      const result = await db.query(query, values);
      const passengerId = result.rows[0].passenger_id;

      res.status(201).json({ passengerId });
    } catch (error) {
      console.error('Error inserting into database:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
