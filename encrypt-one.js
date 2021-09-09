//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const { encryptJson, decryptJson } = require('./crypt-json.js');


var keyJson = "keys.json";
var config = JSON.parse(fs.readFileSync(keyJson));

var newKey = config['newKey'];


const sourceFilePath = "./sample_json/sample.json";
const destFilePath = "sample-encripted.json";


console.log("sourceFilePath ::", sourceFilePath)

console.log("destFilePath :: ",destFilePath);

dataJson = JSON.parse(fs.readFileSync(sourceFilePath))

var hash = encryptJson(dataJson, newKey);
var hashStr = JSON.stringify(hash)

//console.log(hashStr)

console.log("Encripted ....... ")
fs.writeFileSync(destFilePath, hashStr)
console.log(destFilePath, "Saved! ....");




