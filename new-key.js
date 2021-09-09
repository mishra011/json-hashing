const crypto = require('crypto');

const secretKey = crypto.randomBytes(16);

const secretKeyVal = secretKey.toString('hex');

console.log("NEW KEY :: ", secretKeyVal);