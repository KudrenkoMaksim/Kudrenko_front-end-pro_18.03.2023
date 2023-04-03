//1)Вивести на сторінку в один рядок через кому числа від 10 до 20.
/*let a=[];
for (let i=10; i<=20; i++) {
   a.push(i);
}
console.log (a.join(','));*/

//2)Вивести квадрати чисел від 10 до 20.
/*let a=[];
for (let i=10; i<=20; i++) {
   a.push(i**2);
}
console.log (a.join(' '));*/

//3)Вивести таблицю множення на 7.
/*let a=[];
for (let i=0; i<10; i++) {
   a.push(`7*${i}=${7*i}`);
}
console.log(a.join("\n"));*/

//4)Знайти суму всіх цілих чисел від 1 до 15.
/*let a=0;
for (let i=1; i<=15; i++) {
   a+=i;
}
console.log(a);*/

//5)Знайти добуток усіх цілих чисел від 15 до 35.
/*let a=1;
for (let i=15; i<=35; i++) {
   a*=i;
};
console.log(a);*/

//6)Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
/*let a=0;
let b
for (let i=1; i<=500; i++) {
   a=(a+i);
   b=a/i
}
console.log(b);*/
//7)Вивести суму лише парних чисел в діапазоні від 30 до 80.
/*let a=0;
for (let i=30; i<=40; i++) {
   if (i%2===0) {
      a=a+i;
   } else {
      a=a+0
   }
}
console.log(a);*/

//8)Вивести всі числа в діапазоні від 100 до 200 кратні 3.
/*let a=[];
for (let i=100; i<=200; i++) {
   if (i%3===0) {
 a.push(i)
} else {
   a.push()
}
}
console.log(a.join(''))*/

//9) Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
/*let a=18;
let b=[];
for (let i=1; i<=a; i++) {
   if (a%i===0) {
      b.push(i);
   } else {
      b.push();
   }
}
console.log (b.join(' '));*/

//10) Визначити кількість його парних дільників.
/*let a=300;//для ввода числа
let b=[];
for (let i=1; i<=a; i++) {
   if (a%i===0 && i%2===0) {
      b.push(i);
   } else {
      b.push();
   }
}
console.log (b.join(' '));
console.log(b.length);*/

//11) Знайти суму його парних дільників.
//що і вище:
/*let a=18; //число
let b=[];
for (let i=1; i<=a; i++) {
   if (a%i===0 && i%2===0) {
      b.push(i);
      
   } else {
      b.push();
   }
}
console.log (b.join(' '));
console.log(b.length);

//Добавлено
let c=b.reduce((accum,item)=> { 
   accum=accum+item;
   return accum;
})
console.log(c)*/

//12) Надрукувати повну таблицю множення від 1 до 10.
//пошук значення на перехресті значень
/*for (let i=1; i<=10; i++) {
  for (let j=1; j<=10; j++) {
   let c=i*j;
      document.write(' '+(' '+c)+' ')
  }
  document.write('<br>')
}*/
//повний варіант таблиці множення:
/*let a=[];
for (let i=01; i<10; i++) {
   a.push(`${i}*1=${1*i}`);
   a.push(`${i}*2=${2*i}`);
   a.push(`${i}*3=${3*i}`);
   a.push(`${i}*4=${4*i}`);
   a.push(`${i}*5=${5*i}`);
   a.push(`${i}*6=${6*i}`);
   a.push(`${i}*7=${7*i}`);
   a.push(`${i}*8=${8*i}`);
   a.push(`${i}*9=${9*i}`);
   a.push(`${i}*10=${10*i}`);
   
}
console.log(a.join("\n"));*/




