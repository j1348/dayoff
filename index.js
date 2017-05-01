const Holidays = require('date-holidays');
const moment = require('moment');

function addYear(hd, year, min, max) {
    return hd.getHolidays(year).filter((day) => {
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
    let years = [];
    let data = [];

    for(var i=min.year(); i<=max.year(); i++) {
        years.push(i);
    }

    years.forEach((year) => {
        data = data.concat(addYear(hd, year, min, max));
    });

    return data;
}
