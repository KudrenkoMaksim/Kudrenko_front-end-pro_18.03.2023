// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]



const arr = [1, 2, 3, 4, 5, 6, 7]

function removeElement (arr,item) {
for (let i=0; i<arr.length; i++) {
  if (arr[i]===item) {arr.splice(i,1)}
}
  return arr
  }
removeElement(arr, 2)  
console.log (arr)
