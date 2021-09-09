//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const { encryptJson, decryptJson } = require('./crypt-json.js');


var keyJson = "keys.json";
var config = JSON.parse(fs.readFileSync(keyJson));

var oldKey = config['oldKey'];
var newKey = config['newKey'];


const sourceDirPath = "./sample_encrypted";

console.log("SOURCE DIR ::", sourceDirPath)

var destDir = "sample_encryption_updated"
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



fs.readdir(sourceDirPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file        
        var fname = path.join(sourceDirPath, file);

        var data = decryptJson(fname, oldKey);
        console.log("====================================================")

        // console.log(data);
        data = JSON.parse(data);
        var hash = encryptJson(data, newKey);

        var hashStr = JSON.stringify(hash)
        console.log("HASHED")
        var newpath = path.join(destDir, file)
        fs.writeFileSync(newpath, hashStr)
        console.log(file, "Saved!");
    });
});

