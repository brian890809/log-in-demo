import {admin} from '@/config/firebase'

const verifyToken = async (req, res, next) => {
    const idToken = req.headers.authorization?.split(' ')[1];
    if (!idToken) {
        return res.status(403).json({ error: 'Unauthorized to view this page' });
    }

    admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      res.status(401).json({ error: 'Unauthorized to view this page' });
    });
};

export {verifyToken}
