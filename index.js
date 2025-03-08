const timeElement = document.getElementById("time");
const countryElement = document.getElementById("country");
const dateElement = document.getElementById("date");

function getTimeAndDate() {
    const time = dayjs().format("HH:mm:ss");
    const date = dayjs().format("dddd, D MMMM YYYY");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return [time, date, timeZone];
}

setInterval(() => {
    const [time, date, timeZone] = getTimeAndDate();

    countryElement.innerText = timeZone;
    timeElement.innerText = time;
    dateElement.innerText = date;
}, 1000);
