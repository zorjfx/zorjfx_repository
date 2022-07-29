// a

// document.addEventListener("DOMContentLoaded", () => {
//     setInterval(() => {
//         now = new Date();
//         clock = now.toLocaleTimeString();
//         document.getElementById("clock").innerHTML = clock;
//     })
// });



// b

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let randomList1 = [];
let randomList2 = [];

for (let i = 0; i < 101; i++) {
    randomList1.push(getRandomInt(0, 100));
    randomList2.push(getRandomInt(0, 100));
}


let similarElements = [];

for (let i = 0; i < randomList2.length; i++) {
    if (randomList1.find(element => element === randomList2[i] !== undefined)) {
        similarElements.push(randomList1.find(element => element === randomList2[i]))
    }
}

console.log(similarElements);
console.log(randomList1);
console.log(randomList2);


// d


// function yearsInSec(years) {
//     let result = years * 31536000;
//     document.getElementById("result").innerHTML = result.toString();
// }








