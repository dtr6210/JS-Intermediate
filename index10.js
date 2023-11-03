// Question 10:

// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// console.log(today.getHours())
// console.log(today.getMinutes())


// a) Print the total number of minutes that have passed so far today

const totalMinToday = today.getHours() * 60 + today.getMinutes();
console.log(totalMinToday + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today

const totalSecondsToday = totalMinToday * 60 + today.getSeconds();
console.log(totalSecondsToday + ' seconds have passed so far today');

// c) Calculate and print your age as: 'I am x years, y months and z days old'

const dob = new Date("1982, 12, 11");
const month_diff = today - dob.getTime();
const age_dt = new Date(month_diff);
const year = age_dt.getUTCFullYear();
const ageInYears = Math.abs(year - 1970);
const month = age_dt.getUTCMonth();
const day = age_dt.getUTCDay();

console.log(`I am ${ageInYears} years, ${month} months and ${day} days old.`);



// d) Write a function daysInBetween(date1, date2) which calculates and returns the
// amount of days in between the two given dates.



function daysInBetween(date1, date2){
    const timeDiff = date2.getTime() - date1.getTime();
    const dayDiff = Math.round(timeDiff / (1000 * 60 *60 *24));
    return dayDiff;
}

const date1 = new Date(2022, 12, 15 );
const date2 = new Date(2023, 5, 5);

console.log(daysInBetween(date1, date2))




  
