var fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log('Will be executed only if the file read is finished') 