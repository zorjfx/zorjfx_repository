class Planet {
    constructor(name) {
        this.name = name;
    }
    explosion() {
        return 'BANG!';
    }
}

class ExoPlanet {
    constructor(name, creature) {
        this.creature = creature;
        this.name = name;
    }
    explosion() {
        this.creature = null;
        return 'BANG!';
    }
}

let Earth = new ExoPlanet('Earth', ['Human', 'Animals', 'Nature'])
console.log(Earth.explosion());
console.log(Earth.creature);
