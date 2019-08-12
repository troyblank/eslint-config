import Person from './person';

class Developer extends Person {
    constructor(name, age, ...languages) {
        super(name, age);
        this.languages = [...languages];
    }

    printLanguages() {
        return this.languages;
    }
}

const me = new Developer('Troy', 32, 'ES5', 'ES6');
me.getLanguages();
