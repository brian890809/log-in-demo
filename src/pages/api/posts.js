import {verifyToken} from '@/middleware/index.js'
import postController from '@/controllers/post-controller.js'

export default function handler(req, res) {
  if (req.method === 'GET') {
    return verifyToken(req, res, postController.getPosts(req, res));
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}