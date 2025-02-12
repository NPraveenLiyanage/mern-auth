import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js'; 

export const verifyToken = (req, res, next) => { //next use to go next middleware
    const token = req.cookies.access_token;//(npm i cookie-parser)

    if (!token) return next(errorHandler(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'Token is not valid!'));

        req.user = user;// send user inside the req coming from jwt
        next();
    });


}