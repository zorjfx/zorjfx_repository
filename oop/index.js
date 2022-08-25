

// const person = {
//     name: "Roma",
//     age: 13,
//     id: 10230912039123,
// 
// };


class Human{

    constructor(){
        this.name = 'asdasd';
        this.age = 0;
        this.id = null;
    }

    speak(){
        console.log(`Speak ${this.name}!`);
    }

}

const person = new Human();
person.name = "Roma";
person.speak();

const person2 = new Human();
person2.speak();
