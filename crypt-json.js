const { encrypt, decrypt } = require('./crypton.js');
const fs = require('fs');



const encryptJson = (data, secretKey) =>{
    //var jsonConfigData = JSON.parse(fs.readFileSync(keyFilename));
    var jsonStrData = JSON.stringify(data);
    const hash = encrypt(jsonStrData, secretKey);
    //const hashStr = JSON.stringify(hash)
    return hash

}

const decryptJson = (keyFilename, secretKey) => {

    var jsonConfigData = JSON.parse(fs.readFileSync(keyFilename));
    var data = decrypt(jsonConfigData, secretKey);
    return data

};

module.exports = {
    encryptJson,
    decryptJson
};

