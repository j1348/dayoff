var moment = require('moment');
var holidaysBetween = require('./index').holidaysBetween;

var holidays = holidaysBetween(moment().startOf('day'), moment().add(2, 'M'), 'FR');
console.log(holidays);
