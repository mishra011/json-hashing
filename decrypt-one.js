//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const { encryptJson, decryptJson } = require('./crypt-json.js');


var keyJson = "keys.json";
var config = JSON.parse(fs.readFileSync(keyJson));

var newKey = config['newKey'];


const sourceFilePath = "sample-encripted.json";
const destFilePath = "sample-decrypted.json";


console.log("sourceFilePath ::", sourceFilePath)

console.log("destFilePath :: ",destFilePath);



var data = decryptJson(sourceFilePath, newKey);

console.log("Decrypted ....... ")
fs.writeFileSync(destFilePath, data)
console.log(destFilePath, "Saved! ....");




