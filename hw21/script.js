// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
  
class Human {
  constructor (name, gender) {
    this.name=name; 
    this.gender=gender;
  }
}

// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class flat {
  humansInFlat=[];
  addHuman (ExampleHuman) {
    this.humansInFlat.push(ExampleHuman)
  }
}


// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
  flats =[];
  maxFlatsQuantity=0;
  constructor (maxFlatsQuantity) {
    this.maxFlatsQuantity=maxFlatsQuantity
  }
  addFlat (Flat) {
    if (this.flats.length<this.maxFlatsQuantity) {
      this.flats.push(Flat)
    } else {
      console.log('дом переполнен')
    }
  }
}

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.
    
const Alex= new Human ('Alex', 'male');
console.log(Alex);
const Nicole= new Human ('Nicole', 'female');
console.log(Nicole);
const Jack= new Human ('Jack', 'male');
console.log(Jack);

const flat1=new flat() 
const flat2=new flat() 
const flat3=new flat()
flat1.addHuman(Alex) 
flat2.addHuman(Nicole) 
flat3.addHuman(Jack)
console.log(flat1) 
console.log(flat2) 
console.log(flat3) 

const house= new House(2) 
house.addFlat(flat1)
house.addFlat(flat2)
house.addFlat(flat3)
console.log(house)