let date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth() + 1;
let Day = date.getDate();
let Hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();

Month = Month >= 10 ? Month : '0' + Month;
Day = Day >= 10 ? Day : '0' + Day;
Hours = Hours >= 10 ? Hours : '0' + Hours;
minutes = minutes >= 10 ? minutes : '0' + minutes;
second = second >= 10 ? second : '0' + second;

let now = ''.concat(Year,'.',Month,'.',Day,' ',Hours,':',minutes,':',second);

module.exports = { now };