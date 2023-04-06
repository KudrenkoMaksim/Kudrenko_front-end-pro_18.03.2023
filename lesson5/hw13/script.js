//Знайти суму та кількість позитивних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value > 0);
// console.log(b); // масив з позитивних єлементів
// console.log(b.length); //кількість позит єлем 14
// let c=0
// b.forEach((value) => c=c+value)
// console.log(c) // сума позитивних елементів 438

//Знайти мінімальний елемент масиву та його порядковий номер.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b=(a.slice()).sort( (a, b) => a-b);
// console.log(a) // масив
// console.log(b); // відсортований масив по збільшенню
// console.log(b[0]); // мінімільний єлемент -63
// console.log(a.findIndex((value)=>value===(b[0]))+1) //16 -порядковий номер, починаючи з 1-го (не з 0-го)

//Знайти максимальний елемент масиву та його порядковий номер.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b=(a.slice()).sort( (a, b) => a-b);
// console.log(a) // масив
// console.log(b.reverse()); // відсортований масив по зменшенню
// console.log(b[0]); // максимальний єлемент 76
// console.log(a.findIndex((value)=>value===(b[0]))+1) //19 -порядковий номер, починаючи з 1-го (не з 0-го)

//Визначити кількість негативних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value<0);
// console.log(b); // масив з негативних елементів
// console.log(b.length); //кількість негативних елем 10

//Знайти кількість непарних позитивних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value > 0 && value%2!==0);
// console.log(b); // масив з непарних позитивних єлементів
// console.log(b.length); //кількість непарних позит єлем 4

//Знайти кількість парних позитивних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value > 0 && value%2===0);
// console.log(b); // масив з парних позитивних єлементів
// console.log(b.length); //кількість парних позит єлем 10

//Знайти суму парних позитивних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value > 0 && value%2===0);
// console.log(b); // масив з парних позитивних єлементів
// console.log(b.length); //кількість парних позит єлем 10
// let c=0
// b.forEach((value) => c=c+value)
// console.log(c) // сума парних позитивних елементів 292

//Знайти суму непарних позитивних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value > 0 && value%2!==0);
// console.log(b); // масив з непарних позитивних єлементів
// console.log(b.length); //кількість непарних позит єлем 4
// let c=0
// b.forEach((value) => c=c+value)
// console.log(c) // сума непарних позитивних елементів 146

//Знайти добуток позитивних елементів.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b = a.filter((value) => value > 0);
// console.log(b); // масив з позитивних єлементів
// console.log(b.length); //кількість позит єлем 14
// let c=1
// b.forEach((value) => c=c*value)
// console.log(c) // добуток позитивних елементів 996181249307443200

//Знайти найбільший серед елементів масиву, остальні обнулити.
// const a=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const b=(a.slice()).sort( (a, b) => a-b);
// console.log(a) // масив
// console.log(b.reverse()); // відсортований масив по зменшенню
// console.log(b[0]); // максимальний єлемент 76
// console.log(a.findIndex((value)=>value===(b[0]))+1) //19 -порядковий номер, починаючи з 1-го (не з 0-го)

// const c=(a.slice()).map( (value)=>{
//    if (value===b[0]) {
//       return value;
//    } 
//      return 0;
// })
// console.log(c) //масив з обнуленими значеннями, окрім 19го, який = 76
