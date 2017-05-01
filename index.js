const Holidays = require('date-holidays');
const moment = require('moment');

function addYear(hd, year, data, min, max) {
    data[year] = hd.getHolidays(year).filter((day) => {
            const d = moment(day.date);
            if (day.type === 'public') {
                if (d.isSame(min) || d.isSame(max)) {
                    return true
                } else {
                    return d.isAfter(min, 'day') && d.isBefore(max, 'day');
                }
            }
        })
        .map((day) => {
            return {
                date: day.date,
                name: day.name
            }
        });;
}

exports.holidaysBetween = function(min, max, locale) {
    const hd = new Holidays(locale);
    const data = {};

    var years = [];

    for(var i=min.year(); i<=max.year(); i++) {
        years.push(i);
    }

    years.forEach((year) => {
        addYear(hd, year, data, min, max);
    });

    return data;
}
