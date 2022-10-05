const person = {
    firstName: 'aaa',
    lastName: 'bbbb',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    address: {
        street: 'áđá 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getFullName: function() {
        return `I am ${this.firstName} and I live ${this.city},${this.country}. I am ${this.age}`
    }
  }
  console.log(person)
  console.log(person.getFullName())

const copyPerson = Object.assign({}, person,)
console.log(copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys) 

const address = Object.keys(copyPerson)
console.log(address) 