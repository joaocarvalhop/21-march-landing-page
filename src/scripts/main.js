AOS.init();

let holidayDate = new Date("March 21, 2024 00:00:00");

function holidayCounter() {
    const holidayTimeStamp = holidayDate.getTime();

    const now = new Date();
    const nowTimeStamp = now.getTime();

    const holidayDistance = holidayTimeStamp - nowTimeStamp;
    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutesMs = 1000 * 60;

    const daysUntilHoliday = Math.floor(holidayDistance / daysMs);
    const hoursUntilHoliday = Math.floor((holidayDistance % daysMs) / hoursMs);
    const minutesUntilHoliday = Math.floor(
        (holidayDistance % hoursMs) / minutesMs
    );
    const secondsUntilHoliday = Math.floor(
        (holidayDistance % minutesMs) / 1000
    );

    const counter = document.getElementById("counter");

    counter.innerHTML = holidayDistance > 0
            ? `${daysUntilHoliday}d ${hoursUntilHoliday}h ${minutesUntilHoliday}m ${secondsUntilHoliday}s`
            : "...";

    if (holidayDistance <= 1) {
        const nextYear = now.getFullYear() + 1;
        holidayDate = new Date(`March 21, ${String(nextYear)} 00:00:00`);
    }
}

setInterval(holidayCounter, 1000);
