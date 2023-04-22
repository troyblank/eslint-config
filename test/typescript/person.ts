class Person {
	name: string
	age: number
	longname: string

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
		this.longname = 'this is a really long name to test max-len rule. This is really long on purpose.'
	}
}

export default Person
