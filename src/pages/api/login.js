import { loginUser } from '@/controllers/firebase-auth-controller';

export default function handler(req, res) {
  if (req.method === 'POST') {
    return loginUser(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}