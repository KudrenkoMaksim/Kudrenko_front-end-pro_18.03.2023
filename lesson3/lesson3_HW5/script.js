let operation=prompt('Please, enter operation: (add, sub, mult, div)', 'add');
let a=Number(prompt('Enter first number'));
let b=Number(prompt('Enter second number'));
switch(operation){
   case 'add':
      alert(`${(a)}+${(b)}=${(a+b)}`);
      break;
   case 'sub':
      alert(`${(a)}-${(b)}=${(a-b)}`);
      break;
   case 'mult':
      alert (`${(a)}*${(b)}=${(a*b)}`);
      break;
   case 'div':
      alert(`${(a)}/${(b)}=${(a/b)}`)
      break;
   default:
      alert('unknown operation') 
}
