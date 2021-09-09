# HASHING

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


### Installation

For first time installation with default settings follow the following steps:

```sh
$ git clone repo
$ cd repo
$ npm install
```

## Modules:

### Generate New Key
> To generate new key we will run new-key.js and a new key will be displayed on the console

```sh
$ node new-key.js
```

### Update encription of an encripted json 
> Update oldKey and newKey in keys.json and then update the sourceFilePath and destFilePath in update-one-encription.js. It will first decrypt the json usind old key then encript it using newkey and save it destFilePath

```sh
$ node update-one-encription.js
```

### Update encription of many json in a dir
> Update oldKey and newKey in keys.json and then update the sourceDirPath and destDir in update-many-encriptions.js. It will read all jsons one by one and  first decrypt the json usind old key then encript it using newkey and save it destDir

```sh
$ node update-many-encriptions.js
```

### Encrypt one Json file
> Update newKey in keys.json and then update the sourceFilePath and destFilePath in encrypt-one.js. 

```sh
$ node encrypt-one.js
```

### Decrypt one Json file
> Update newKey in keys.json and then update the sourceFilePath and destFilePath in decrypt-one.js. 

```sh
$ node decrypt-one.js
```

### Encrypt all Json files in a dir and save them all in new dir
> Update oldKey and newKey in keys.json and then update the sourceDirPath and destDir in encrypt-many.js.

```sh
$ node encrypt-many.js
```

### Decrypt all Json files in a dir and save then all in new dir
> Update oldKey and newKey in keys.json and then update the sourceDirPath and destDir in decrypt-many.js 

```sh
$ node decrypt-many.js
```
