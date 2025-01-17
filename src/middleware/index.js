import {admin} from '@/config/firebase'

const verifyToken = (idToken) => {  
  if (!idToken) {
      return res.status(403).json({ error: 'No token provided' });
  }
  return admin.auth().verifyIdToken(idToken)
  // .then((decodedToken) => {
  //   req.user = decodedToken;
  //   next();
  // })
  // .catch((error) => {
  //   res.status(401).json({ error: 'Unauthorized to view this page' });
  // });
};

export {verifyToken}
