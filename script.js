const newYears = '1 Jan 2022';
const dayP = document.getElementById('day');
const hourP = document.getElementById('hour');
const minuteP = document.getElementById('minute');
const secondP = document.getElementById('second');

function countDown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hour = Math.floor(totalSecond / 3600) % 24;
    const minute = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;

    dayP.innerHTML = timeFormat(days);
    hourP.innerHTML = timeFormat(hour);
    minuteP.innerHTML = timeFormat(minute);
    secondP.innerHTML = timeFormat(second);
}
function timeFormat(time){
    if(time < 10){
        time = `0${time}`;
    }
    return time;
}
countDown();

setInterval(countDown, 1000);