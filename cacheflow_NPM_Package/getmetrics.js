const fs = require('fs');

console.log('hello');

const cachedData = fs.readFileSync('./globalMetrics.json', 'utf8');
const parsedData = JSON.parse(cachedData);

console.log(parsedData);
