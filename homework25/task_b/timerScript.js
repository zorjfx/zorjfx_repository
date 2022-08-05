let sec = 0;
let min = 0;
let hour = 0;


document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        sec++
        if (sec === 60) {
            sec = sec - 60;
            min++;
        }
        if (min === 60) {
            min = min - 60;
            hour++;
        }
        if (sec < 10) {
            if (min < 10) {
                if (hour < 10) {
                    document.getElementById('timer').innerText = '0' + hour + ':0' + min + ':0' + sec;
                } else {
                    document.getElementById('timer').innerText = hour + ':0' + min + ':0' + sec;
                }
            } else {
                if (hour < 10) {
                    document.getElementById('timer').innerText = '0' + hour + ':' + min + ':0' + sec;
                } else {
                    document.getElementById('timer').innerText = hour + ':' + min + ':0' + sec;
                }
            }
        } else {
            if (min < 10) {
                if (hour < 10) {
                    document.getElementById('timer').innerText = '0' + hour + ':0' + min + ':' + sec;
                } else {
                    document.getElementById('timer').innerText = hour + ':0' + min + ':' + sec;
                }
            } else {
                if (hour < 10) {
                    document.getElementById('timer').innerText = '0' + hour + ':' + min + ':' + sec;
                } else {
                    document.getElementById('timer').innerText = hour + ':' + min + ':' + sec;
                }
            }
        }
    }, 1000);
})

