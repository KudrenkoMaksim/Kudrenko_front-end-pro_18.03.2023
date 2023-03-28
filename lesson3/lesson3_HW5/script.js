let operation=prompt('Please, enter operation: (add, sub, mult, div)', 'add');
let a=Number(prompt('Enter first number'));
let b=Number(prompt('Enter second number'));
switch(operation){
   case 'add':
      alert(`${String(a)}+${String(b)}=${Number(a+b)}`);
      break;
   case 'sub':
      alert(`${String(a)}-${String(b)}=${Number(a-b)}`);
      break;
   case 'mult':
      alert (`${String(a)}*${String(b)}=${Number(a*b)}`);
      break;
   case 'div':
      alert(`${String(a)}/${String(b)}=${Number(a/b)}`)
      break;
   default:
      alert('unknown operation') 
}
