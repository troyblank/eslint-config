class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.longname = 'this is a really long name to test max-len rule. This is really long on purpose.';
    }
}

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
