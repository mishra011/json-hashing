const crypto = require('crypto');
const fs = require('fs');


const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = crypto.randomBytes(16);


const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};


const encryptBotjson = (keyFilename) =>{
    var jsonConfigData = JSON.parse(fs.readFileSync(keyFilename));
    //console.log(jsonConfigData)

    var jsonStrData = JSON.stringify(jsonConfigData);
    //console.log(jsonConfigData)


    const hash = encrypt(jsonStrData);

    const hashStr = JSON.stringify(hash)

    //fs.writeFileSync("hash1.json", hashStr)

    //console.log("DUMPED")
    return 1

}



const decryptBotJson = (keyFilename) => {

    var jsonConfigData = JSON.parse(fs.readFileSync(keyFilename));

    var hashValue = decrypt(jsonConfigData);

    //var hashjson = JSON.parse(hashValue);

    return hashValue

};



module.exports = {
    encrypt,
    decrypt,
    encryptBotjson,
    decryptBotJson
};