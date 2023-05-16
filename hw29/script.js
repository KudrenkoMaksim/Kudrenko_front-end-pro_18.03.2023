// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const imgCollection=document.querySelectorAll('img')
console.log(imgCollection)
const pCollection=document.querySelectorAll('p')
console.log(pCollection)


let arr=new Array()
for (let i=0; i<imgCollection.length; i++) {
imgCollection[i].addEventListener('click', count) 
function count () {
   arr.push(i)
   pCollection[i].innerHTML=`голоса: ${arr.filter((value)=>value===i).length}`
}
}
