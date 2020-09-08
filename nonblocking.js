var fs = require('fs');
var data = fs.readFile('text.txt', function(err, data) {
    if(err) {
        console.log(err);
    }
    if(data) {
        console.log(data.toString());
    }
    setTimeout(() => {
        console.log('Display after 2  seconds')
    }, 2000);
});
console.log(('It may be executed while reading the text file'));
