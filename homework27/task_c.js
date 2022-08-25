class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return 'WOOF WOOF';
    }
    run() {
        return '*running*';
    }
    attack() {
        return 'WOOF WOOF', '*running*';
    }
}

let dog = new Dog();
console.log(dog.bark());
