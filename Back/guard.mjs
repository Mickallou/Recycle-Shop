import jwt from 'jsonwebtoken';

export const guard = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send("Token is missing");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            return res.status(401).send("User is not authenticated");
        } else {
            req.user = data;
            next();
        }
    });
};

export const adminGuard = (req, res, next) => {
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            res.status(401).send("User is not authenticated");
            return;
        } else {
            if (data.isAdmin) {
                next();
            } else {
                res.status(403).send("User is not authorized");
            }
        }
    }) 
}

export const getUser = (req) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return null;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return user;
    } catch (err) {
        console.error("JWT verification error:", err.message);
        return null;
    }
}