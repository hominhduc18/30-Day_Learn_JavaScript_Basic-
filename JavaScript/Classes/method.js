class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person1 = new Person('Asabenáđáeh', 'Yetayeáđáh', 250, 'Finlaáđâsnd', 'Helsiáđánki')
  const person2 = new Person('Lidiáđáya', 'Teádákle', 28, 'Finláđáand', 'Espoádáo')
  
  console.log(person1.getFullName())
  console.log(person2.getFullName())