// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

class Human {
  name=""
  age=""
  constructor(name, age) {
    this.name=name
    this.age=age
  }
  getInfo () {
    console.log(this.name, this.age)
 
  }
}
// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
const Alex=new Human('Alex', 25)
console.log(Alex)
const Chack=new Human('Chack', 17)
console.log(Chack)
const John=new Human('John', 27)
console.log(John)

Alex.getInfo()
Chack.getInfo()
John.getInfo()


// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Car  {
  brand="";
  model="";
  year=0;
  number=0;
  owner="";
  constructor (brand, model, year, number) {
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.number=number;
  }
  CarOwner (Owner){
    if (Owner.age>=18) {
      return this.owner=Owner
    } else {
      return (this.owner=`name:${Owner.name} ${Owner.age} years !!!<18 years`)}
  }
  
  carInfo () {
    console.log (this, this.owner)
  }
  
}
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
const AlexCar = new Car ('Honda', 'Accord', 2013, '444855PL')
const ChackCar = new Car ('Audi', 'A6', 2008, '445255PL')
const JohnCar = new Car ('Wolkswagen', 'Golf', 2015, '444855PL')
console.log(AlexCar)
console.log(ChackCar)
console.log(JohnCar)
console.log(AlexCar.CarOwner(Alex))
console.log(ChackCar.CarOwner(Chack))
console.log(JohnCar.CarOwner(John))
AlexCar.carInfo()
ChackCar.carInfo()
JohnCar.carInfo()
