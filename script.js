const refs = {
    days: document.querySelector(".days"),
    hours: document.querySelector(".hours"),
    minutes: document.querySelector(".minutes"),
    seconds: document.querySelector(".seconds"),
    dd: document.querySelector("#dd"),
    hh: document.querySelector("#hh"),
    mm: document.querySelector("#mm"),
    ss: document.querySelector("#ss"),
    day_dot: document.querySelector(".day_dot"),
    hour_dot: document.querySelector(".hour_dot"),
    minute_dot: document.querySelector(".minute_dot"),
    second_dot: document.querySelector(".second_dot"),

    day_d: document.querySelector(".day_dot"),
    hour_d: document.querySelector(".hour_dot"),
    minute_d: document.querySelector(".minute_dot"),
    second_d: document.querySelector(".second_dot"),
};

const dateToCalculate = new Date("10/23/2022");

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

function timer() {
    setInterval(() => {
        const currentDate = new Date();
        const result = dateToCalculate - currentDate;

        const s = Math.floor((result / seconds) % 60);
        const m = Math.floor((result / minutes) % 60);
        const h = Math.floor((result / hours) % 60);
        const d = Math.floor((result / days) % 24);

        refs.days.innerHTML = `<span class="clock__item">${addZero(
            d
        )}</span> <span class="clock__title">Days</span>`;
        refs.hours.innerHTML = `<span class="clock__item">${addZero(
            h
        )} </span><span class="clock__title">Hours</span>`;
        refs.minutes.innerHTML = `<span class="clock__item">${addZero(
            m
        )} </span><span class="clock__title">Minutes</span>`;
        refs.seconds.innerHTML = `<span class="clock__item">${addZero(
            s
        )} </span><span class="clock__title">Seconds</span>`;

        refs.dd.style.strokeDashoffset = 630 - (630 * d) / 30;
        refs.hh.style.strokeDashoffset = 630 - (630 * h) / 24;
        refs.mm.style.strokeDashoffset = 630 - (630 * m) / 60;
        refs.ss.style.strokeDashoffset = 630 - (630 * s) / 60;

        refs.day_dot.style.transform = `rotate(${d * 12}deg)`;
        refs.hour_dot.style.transform = `rotate(${h * 15}deg)`;
        refs.minute_dot.style.transform = `rotate(${m * 6}deg)`;
        refs.second_dot.style.transform = `rotate(${s * 6}deg)`;
    }, 1000);
}

function addZero(value) {
    return value.toString().padStart(2, "0");
}

timer();
