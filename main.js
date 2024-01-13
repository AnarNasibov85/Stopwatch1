let ms = 0;
let s = 0;
let m = 0;
let hr = 0;
let interval;
let laps = [];

let appendMs = document.getElementById('msec');
let appendSec = document.getElementById('sec');
let appendMin = document.getElementById('min');
let appendHr = document.getElementById('hr');
let lapsContainer = document.getElementById('lapsContainer');

let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');
let buttonLap = document.getElementById('lap');

function timer() {
    ms++;
    if (ms > 9) {
        appendMs.innerHTML = ms;
    } else {
        appendMs.innerHTML = "0" + ms;
    }
    if (ms > 99) {
        s++;
        ms = 0;
        ms++;
        if (s > 9) {
            appendSec.innerHTML = s;
        } else {
            appendSec.innerHTML = '0' + s;
        }
        if (s > 59) {
            s = 0;
            ms++;
            s++;
            if (m > 9) {
                appendMin.innerHTML = m;
            } else {
                appendMin.innerHTML = '0' + m;
            }
            if (m > 59) {
                m = 0;
                hr++;
                m++;
                if (hr > 9) {
                    appendHr.innerHTML = hr;
                } else {
                    appendHr.innerHTML = '0' + hr;
                }
            }
        }
    }
}

buttonStart.onclick = function () {
    interval = setInterval(timer);
};

buttonStop.onclick = function () {
    clearInterval(interval);
};

buttonReset.onclick = function () {
    ms = 0;
    s = 0;
    m = 0;
    hr = 0;
    appendMs.innerHTML = "00";
    appendSec.innerHTML = "00";
    appendMin.innerHTML = "00";
    appendHr.innerHTML = "00";
    laps = [];
    updateLaps();
};

buttonLap.onclick = function () {
    const lapTime = `${appendHr.innerHTML}:${appendMin.innerHTML}:${appendSec.innerHTML}:${appendMs.innerHTML}`;
    laps.push(lapTime);
    updateLaps();
};

function updateLaps() {
    lapsContainer.innerHTML = '';
    laps.forEach((lap, index) => {
        const lapElement = document.createElement('div');
        lapElement.classList.add('lap');
        lapElement.innerHTML = `<p>Lap ${index + 1}: ${lap}</p>`;
        lapsContainer.appendChild(lapElement);
    });
};
