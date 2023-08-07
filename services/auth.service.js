const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJwtToken = (token) =>
{
    try {
        var decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decodedToken;
    } catch (err) {
        return err.message;
    }
}
module.export = { verifyJwtToken };