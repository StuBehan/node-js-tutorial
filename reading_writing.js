var fs = require('fs');

// Sync naming convention explicitly states that this function will block any futher code until completed

// var readText = fs.readFileSync('read_some.txt', 'utf8');

// fs.writeFileSync('write_some.txt', readText);

// console.log(readText);

fs.readFile('read_some.txt', 'utf-8', function(err, data){
  fs.writeFile('write_some.txt', data, (err)=>{ });
});

// console.log('I\'m second but first!');

