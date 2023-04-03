/*let birthday=prompt('Write your birthday year');
let city=prompt('Write the name of the City where you live');
let sport=prompt('Your favorite sport');

switch (true) {
   case birthday===null:
   case birthday.trim()==='':
      birthday='We are sorry, you did not enter your Birthday year';
      break;
   case (birthday<=1920):
      birthday='Incorrect birthday year';
      break;
   case (birthday>1920 && birthday<1940):
      birthday='You are very old';
      break;
   case (birthday>2010 && birthday<=2023):
      birthday='Your are a child';
      break;
   case (birthday>2023):
      birthday='Birthday year incorrect';
      break;
   default:
      birthday=`Your age is ${2023-birthday} years`;
      break;
   };
switch (true) {
   case city===null:
   case city.trim()==='':
      city='We are sorry, you did not enter your City';
      break;
   case city==='London':
      city='You are living in the capital of England';
      break;
   case city==='Kyiv':
      city='You are living in the capital of Ukraine';
      break;
   case city==='Washington':
      city='You are living in the capital of USA';
      break;
   default: 
      city=`You are living in the City ${city}`;
      break;
};
switch (true){
   case sport===null:
   case sport.trim()==="":
      sport='We are sorry, you did not enter your sport';
      break;
   case sport==='boxing':
      sport='Do you want to be like Klitschko?';
      break;
   case sport==='basketball':
      sport='Do you want to be like Michael Jordan?';
      break;
   case sport==='race':
      sport='Do you want to be like Michael Schumacher?';
      break;
   default: 
      sport=`Your favorite sport is ${sport}`;
      break;
};

alert 
   (`
   ${birthday}
   ${city}
   ${sport}
   `);
*/



let b=prompt('year',1985);
let a=prompt('city','London');
let c=prompt('sport','golf');

if (b===null) {
   alert('You do not enter your birthday');
} else
if (b.trim()==='') {
   alert('You do not enter your birthday');
} else
if (b<1935) {
   alert ('Incorrect data of birthday');
} else
if (b>2022) {
   alert ('Incorrect data of birthday');
} else
if (a===null) {
   alert ('You do not enter your City');
} else
if (a.trim()==='') {
   alert ('You do not enter your City');
} else
if (c===null) {
   alert ('You do not enter your sport');
} else
if (c.trim()==='') {
   alert ('You do not enter your sport');
} else {


const cityData={
   London: 'You are %s years old \n You live in the capital of England',
   Washington:'You are %s years old \n You live in the capital of USA',
   Kyev:'You are %s years old \n You live in the capital of Ukraine',
   default:'You are %s years old \n You live in %a',
}
const sportData={
   football:'Cool! Do you want to be like Messi?',
   basketball:'Cool! Do you want to be like James?',
   golf:'Cool! Do you want to be like Woods?',
   default:'You choose %v as your favorite sport.'
}
let message1=a==='London' ? cityData.London.split('%s').join(2023-b) :
             a==='Washington' ? cityData.Washington.split('%s').join(2023-b):
             a==='Kyev' ? cityData.Kyev.split('%s').join(2023-b): 
             cityData.default.split('%s').join(2023-b).split('%a').join(a);

let message2=c==='football' ? sportData.football:
             c==='basketball' ? sportData.basketball:
             c==='golf' ? sportData.golf : 
             sportData.default.split('%v').join(c);

alert (message1+'\n'+message2);
}


