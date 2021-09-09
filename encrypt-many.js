//requiring path and fs modules
const path = require('path');
const fs = require('fs');
// const { encrypt, decrypt } = require('./crypton.js');
const { encryptJson, decryptJson } = require('./crypt-json.js');


var keyJson = "keys.json";
var config = JSON.parse(fs.readFileSync(keyJson));

var newKey = config['newKey'];


var sourceDir = "sample_json";
var destDir = "sample_encrypted"


const directoryPath = path.join(__dirname, sourceDir);

console.log("SOURCE DIR ::", directoryPath)

const destPath = path.join(__dirname, destDir);
console.log("DEST DIR :: ",destPath);


if (fs.existsSync(destPath)) {
    console.log('Dest Directory exists!');
} else {
    console.log('Dest Directory not found.');
    fs.mkdirSync(destPath, {
		recursive: true
    });
    console.log("Dest Dir Created :: ", fs.existsSync(destPath))
}



fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        
        var fname = directoryPath + "/" + file
        var dataJson = JSON.parse(fs.readFileSync(fname))
        

        var hash = encryptJson(dataJson, newKey);

        var hashStr = JSON.stringify(hash)
        var newpath = path.join(destDir, file)
        fs.writeFileSync(newpath, hashStr)
        console.log(file, "Saved!");
    });
});

