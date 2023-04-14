//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. 

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
 let arrOne=[] //пустий масив, в який будуть надходити випадкові значення
 let arrTwo=characters.split('') // строка в массив по кожному елементу окремо

 for (let i=0; i<length; i++) { //цикл для генерації нових значень Math.random
arrOne.push(arrTwo[Math.floor(Math.random()*arrTwo.length)]) //випадкове ціле число (менше length) виступає індексом для arrTwo, відповідне значення надходить в arrOne 
}
return arrOne.join('') //функція повертає строку із масива аrrOne
}
const key= generateKey(5, characters) //занчення функції просвоєно змінній згідно з прикладом завдання

console.log(key) // значення в консоль
