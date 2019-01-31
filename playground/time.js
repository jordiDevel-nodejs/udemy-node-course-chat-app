//Jan 1st 1970 00:00:00 am --> timestamp = 0
const moment = require('moment');

const date = moment(1234);

console.log(date.format());
console.log(date.format('h:mm a'));
console.log(date.format('H:mm'));