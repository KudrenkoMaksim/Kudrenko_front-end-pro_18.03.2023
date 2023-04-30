// Мережа фастфудів пропонує кілька видів гамбургерів:
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

// Приклад роботи коду:

// // маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());

// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());

// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger {
  constructor (hamburger, stuffing) {
    this.hamburger=hamburger
    this.stuffing=stuffing
  }
  static SIZE_SMALL ={price: 50, calories:20 }
  static SIZE_LARGE ={price: 100, calories:40 }

  static STUFFING_CHEESE ={price: 10, calories:20 }
  static STUFFING_SALAD ={price: 20, calories:5 }
  static STUFFING_POTATO ={price: 15, calories:10 }

  static TOPPING_MAYO ={price: 20, calories:5 }
  static TOPPING_SAUCE ={price: 15, calories:0 }

  toping = {
    price: null,
    calories: null
  }

  addTopping (value) {
    
    this.toping.price=this.toping.price+value.price
    this.toping.calories=this.toping.calories+value.calories
 
  }
  calculate (){
    let result = this.stuffing===undefined ? (this.hamburger.calories+this.toping.calories) :(this.hamburger.calories+this.stuffing.calories+this.toping.calories)
    return result
  }
  calculatePrice (){
    let result = this.stuffing===undefined ? (this.hamburger.price+this.toping.price) :(this.hamburger.price+this.stuffing.price+this.toping.price)
    return result
  }
  
}

let burger = new Hamburger (Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
console.log(burger) //Hamburger {hamburger: {…}, stuffing: {…}}
burger.addTopping(Hamburger.TOPPING_MAYO);
console.log(burger) //Hamburger {hamburger: {…}, stuffing: {…}, toping: {…}}

console.log('Calories: ' + burger.calculate ()) //Calories: 45
console.log('Price: ' + burger.calculatePrice()) //Price: 80
burger.addTopping(Hamburger.TOPPING_SAUCE)
console.log(burger) //Hamburger {toping: {…}, hamburger: {…}, stuffing: {…}}
console.log("Price with sauce: " + burger.calculatePrice()) //Price with sauce: 95