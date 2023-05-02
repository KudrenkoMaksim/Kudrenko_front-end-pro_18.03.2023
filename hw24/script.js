// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.



// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.



// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath {
   obj = {x:0, y:0, znak:0 }
   input () {
      this.obj.x=prompt('enter x')
      if (isNaN(+this.obj.x)||this.obj.x==null) {console.log('Not a number, заново') 
      return this.input()}

      this.obj.y=prompt('enter y')
      if (isNaN(+this.obj.y)||this.obj.y==null) {console.log('Not a number, заново')
      return this.input()}
      
      this.obj.znak=prompt('enter znak')
      if (this.obj.znak==='+'||this.obj.znak==='-' ||this.obj.znak==='*' ||this.obj.znak==='/') {
      return this.obj
   } else {
      console.log ('некорректный знак, заново') 
      return this.input()
   }
   }
   check (obj) {
      obj=this.input()
      let c=prompt(`выполнить действие ${this.obj.x}  ${this.obj.znak}  ${this.obj.y} ? enter =ДА, esc=НЕТ`)
      if (c===null) {
         return this.check()
      }  else if (c==='') {
            switch (this.obj.znak) {
               case '+':
                  return (+this.obj.x)+(+this.obj.y)
               case '-':
                  return (+this.obj.x)-(+this.obj.y)
               case '*':
                  return (+this.obj.x)*(+this.obj.y)
               case '/': 
               if((+this.obj.x)/(+this.obj.y)===Infinity) {console.log('/ 0')}   
               else {return (+this.obj.x)/(+this.obj.y)} 
            }  
         } else {console.log('только ввод или отмена!!, заново') 
         return this.check()}
      }
}
obj=this.input
const p= new SuperMath()
console.log(p)
console.log(p.input())
console.log(p.check(obj))


