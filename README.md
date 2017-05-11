DayOff
======

The main purpose of this module is to return the holiday between two dates

Install
-------
```
npm install
```

How to use it
-------------
```
const moment = require('moment');
const dayoff = require('dayoff');
const minDate = moment().startOf('day');
const maxDate = moment().endOf('day').add(1, 'month');

const holidays = dayoff.holidaysBetween(minDate, maxDate, 'FR');
```
This will return the holiday from now till one month later

Dependencies
------------
- date-holidays@0.1.9
- moment@2.18.1
