import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../../lib/db'; // Adjust based on your setup

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const result = await db.query('SELECT * FROM passengers WHERE email = $1', [email]);
      const user = result.rows[0];

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ firstName: user.first_name, lastName: user.last_name }, JWT_SECRET, { expiresIn: '1h' });
        
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
