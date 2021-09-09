//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const { encryptJson, decryptJson } = require('./crypt-json.js');


var keyJson = "keys.json";
var config = JSON.parse(fs.readFileSync(keyJson));

var oldKey = config['oldKey'];
var newKey = config['newKey'];


const sourceFilePath = "sample-encripted.json";
const destFilePath = "sample-updated-encripted.json";


console.log("sourceFilePath ::", sourceFilePath)

console.log("destFilePath :: ",destFilePath);



var data = decryptJson(sourceFilePath, oldKey);
console.log("Decryting .......")
data = JSON.parse(data);

var hash = encryptJson(data, newKey);
var hashStr = JSON.stringify(hash)
console.log("Encripted ....... ")

fs.writeFileSync(destFilePath, hashStr)
console.log(destFilePath, "Saved! ....");




