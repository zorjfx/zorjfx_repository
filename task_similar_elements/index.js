
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let randomList1 = [];
let randomList2 = [];

for (let i = 0; i < 101; i++) {
    randomList1.push(getRandomInt(0, 100));
    randomList2.push(getRandomInt(0, 100));
}


for (let i = 0; i < randomList2.length; i++) {
    const foundEntry = randomList1.find(element => element === randomList2[i]);

    if (foundEntry !== undefined) {
        const similarEntryElement = document.createElement('span');
        similarEntryElement.innerText = foundEntry.toString() + " ";
        document.body.appendChild(similarEntryElement);
    }
}


document.body.innerText = prompt();//  `<div style="transform: rotate(180deg)">123</div>`;

