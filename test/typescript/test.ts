import Person from './person'
import { Pet } from './types'

class Developer extends Person {
    languages: string[]
    pet: Pet

    constructor(name, age, ...languages) {
        super(name, age)

        this.languages = [...languages]
        this.pet = { name: 'bucky', type: 'chameleon' }
    }

    printLanguages() {
        return this.languages
    }

    printPet() {
        return this.pet
    }
}

const me = new Developer('Troy', 32, 'ES5', 'ES6')
me.printLanguages()
me.printPet()
