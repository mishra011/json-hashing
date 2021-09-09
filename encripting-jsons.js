//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//const { encrypt, decrypt } = require('./crypto.js');
const { encrypt, decrypt } = require('./crypton.js');


var sourceDir = "botjsons0";
var destDir = "test2"

var keyJson = "keys.json";
var config = JSON.parse(fs.readFileSync(keyJson));

var newKey = config['newKey'];


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
        var jsonConfigData = JSON.parse(fs.readFileSync(fname))
        var jsonStrData = JSON.stringify(jsonConfigData);
        //console.log(jsonConfigData)

        var hash = encrypt(jsonStrData, newKey);

        var hashStr = JSON.stringify(hash)
        var newpath = path.join(destDir, file)
        fs.writeFileSync(newpath, hashStr)
        console.log(file, "Saved!");
    });
});

