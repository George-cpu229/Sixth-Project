//8. Set DOM manipulation for appropriate value which is under this note
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


//1.Set a main aim to get this date
const newYears = '1 Jan 2022';

//2.Set a function which will respond to time distance between current date and New Year
function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

//4.Set seconds  in order to subtract a days' time left
const totalSeconds = (newYearsDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);
//5.Set  hours using totalSeconds data and adding module in order to nest number in page and see time left
const hours = Math.floor(totalSeconds / 3600) % 24;
//6.Set  minutes using totalSeconds data and adding module in order to nest number in page and see time left
const minutes = Math.floor(totalSeconds / 60) % 60;
//7. Set seconds using totalSeconds data and adding module in order to nest number in page and see time left
const seconds = Math.floor(totalSeconds) % 60;

//// console.log(days, hours, minutes, seconds);

//9.Then I need to do manipulation appropriating Dom objecs with pure-javascript objects
daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);

}
//10. Setting format time in order to set zeroes in one-valued numbers
function formatTime(time){
return time < 10 ? `0${time}` : time;
}

//initial call
countDown();

//3.Set an interval of every time-dimention
setInterval(countDown, 1000)
