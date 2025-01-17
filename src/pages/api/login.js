import { loginUser } from '@/controllers/firebase-auth-controller';

export default function handler(req, res) {
  if (req.method === 'POST') {
    return loginUser(req, res);
    
    // const result = loginUser(req, res);
    // console.log(result);
    // if (result.success) {
    //   res.setHeader('Set-Cookie', `accessToken=${result.accessToken}; HttpOnly; Path=/; Max-Age=3600`);
    //   res.status(200).json({ message: 'Login successful' });
    // } else {
    //   res.status(result.status).json({ error: result.error });
    // }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}