// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const cell=document.querySelector('div.Elem')
console.log(cell)

let d=addTable(cell, 10, 10)
function addTable (cell, rows, col) {
   document.createElement('table')


   for (i=0; i<rows; i++) {
      let tr=document.createElement('tr')
      for (j=0; j<col; j++) {
         let td=document.createElement('td')
         tr.insertAdjacentElement ('afterbegin',td)
      }
      cell.insertAdjacentElement('afterbegin', tr)
   }
   const p=document.querySelectorAll('td')
   for (k=0; k<p.length; k++) {
      p[k].innerHTML=k+1
   }

}
