import {admin} from '@/config/firebase'

const verifyToken = (idToken) => {  
  if (!idToken) {
      return res.status(403).json({ error: 'No token provided' });
  }
  return admin.auth().verifyIdToken(idToken)
};

export {verifyToken}
