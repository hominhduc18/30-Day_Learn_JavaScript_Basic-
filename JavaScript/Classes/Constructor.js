class Person {
    constructor(firstName, lastName) {
      console.log(this) 
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person = new Person()

  const person1 = new Person('aaa','bbbb');
  
  console.log(person)

  console.log(person1)