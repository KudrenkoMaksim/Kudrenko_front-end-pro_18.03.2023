//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const arr = [1, 2,'b',3 ,4,'c',true ,[1,2,3], 5, {name: 'Max'} ,6 ,7 ,8 ,'9' ]
// function average (arr) {
//   let arrOne=[] 
// for (let i=0; i<arr.length; i++) {
//    if (typeof arr[i]==='number') {arrOne.push(arr[i])}
//    }  
// arrTwo=arrOne.reduce((total, amount)=>total+amount) 
// return arrTwo/arrOne.length
// }
// average(arr)
// console.log (average(arr))


//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// const a=Number(prompt('Enter first number-x',25));
// const operation=prompt('znak: (+, -, *, /,%,^)', '+');
// const b=Number(prompt('Enter second number-y',5));

// doMath(a, operation,b)

// function doMath(x,znak,y) {
//   if (y!==0 && !isNaN(x) && !isNaN(y)) {
// switch(znak){
//    case '+':
//       console.log(`${(x)}+${(y)}=${(x+y)}`);
//       break;
//    case '-':
//       console.log(`${(x)}-${(y)}=${(x-y)}`);
//       break;
//    case '*':
//       console.log (`${(x)}*${(y)}=${(x*y)}`);
//       break;
//    case '/':
//       console.log(`${(x)}/${(y)}=${(x/y)}`)
//       break;
//    case '%':
//       console.log(`${(x)} % ${(y)}=${(y/x)*100}%`)
//       break;
//    case '^':
//       console.log(`${(x)}^${(y)}=${Math.pow(x,y)}`)
//       break;
//    default:
//       console.log('unknown operation') 
//       break;
// }
// } else {console.log ('impossible operation')}
// }

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.


// function makeArr (arrOne, arrTwo) {
//   arrOne=[]
//   let a=prompt('Длина основного массива arr')
//    for (let i=0; i<a; i++) {
//     arrTwo=[]
//     arrOne.push(arrTwo)
//     let b=prompt(`Количество элементов в arr  ${i+1}, всего элементов arr ${a}`)
//     for (let d=0; d<b; d++) {
//       let c=prompt(`Введите элемент arr ${[i+1]} ${[d+1]}, всего их  ${b}`)
//       arrTwo.push(c)
//     }
//    }
//    return arrOne
// }

// console.log(makeArr())


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function Words(a,b) { 
  a=a.split('');      
  let c=[];
  for(let i = 0; i < a.length ; i++) {
    if (b.indexOf(a[i])==-1) {c.push(a[i])}
  }
return c=c.join('')
}
console.log(Words('hello world',['d','l'])) 







