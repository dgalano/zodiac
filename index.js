const zodiacSign = require('get-zodiac-sign');
var myZodiacSign1 = zodiacSign(6,28);
var myZodiacSign2 = zodiacSign(9,15);
var myZodiacSign3 = zodiacSign(8,30);
console.log(myZodiacSign1);
console.log(myZodiacSign2);
console.log(myZodiacSign3);

//use the fs function that comes with node
const fs = require("fs");
fs.writeFileSync("file2.txt", myZodiacSign1 + " and " + myZodiacSign2);

// creates a local web server and displays the above variables
const http = require('http');

// changed hostname to 0.0.0.0 to work with Repl web server
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("My Zodiac Sign is " + myZodiacSign1);
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('My Zodiac Sign is ' + myZodiacSign1 + 'and daugther is ' + myZodiacSign2)
});

// practice, practice, practice...
