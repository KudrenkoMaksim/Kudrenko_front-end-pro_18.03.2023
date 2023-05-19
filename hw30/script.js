// /Робимо на підставі минулого дз.
// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)


const body=document.querySelector('body')
const divWatch=document.querySelector('.watch')
const divFormField=document.querySelector('.formField')
const divTotal=document.querySelector('.total')

divFormField.hidden=true
divTotal.hidden=true


body.addEventListener('click', createForm)
function createForm (event) {
  
   if (event.target.closest('.button_buy')) {divFormField.hidden=false}   
   if (!event.target.closest('.formField') && !event.target.closest('.watch') && !event.target.closest('.total')) {divFormField.hidden=true}
}


body.addEventListener('click', createTotal)

function createTotal (event) {
 event.preventDefault()
   

   const surName=document.querySelector('input[name="surname"]').value
   const Name=document.querySelector('input[name="name"]').value
   const FatherName=document.querySelector('input[name="fatherName"]').value
   const Production=document.querySelector('input[name="production"]').value
   const Department=document.querySelector('select[name="department"]').value
   const Town=document.querySelector('select[name="town"]').value
   const Payment=document.querySelector('select[name="payment"]').value
   const Comment=document.querySelector('input[name="comment"]').value
   
   
   function validateInput () {
     
      if (/^\d+$/.test(surName) || surName==='') {return confirm ('ancorrect surname')}
      else {document.querySelector('.SurName').textContent=`Прізвище: ${surName}`}

      if (/^\d+$/.test(Name) || Name==='') {return confirm ('ancorrect name')}
      else {document.querySelector('.Name').textContent=`Ім'я: ${Name}`}

      if (/^\d+$/.test(FatherName) || FatherName==='') {return confirm ('ancorrect fathername')}
      else {document.querySelector('.FatherName').textContent=`По батькові: ${FatherName}`}

      if (/^\d+$/.test(Production) && Production!=='' && Production>=1) {document.querySelector('.Production').textContent=`Кількість: ${Production}`}
      else {return confirm ('ancorrect product')}

      document.querySelector('.Department').textContent=`Відділення: ${Department}`
      document.querySelector('.Town').textContent=`Місто: ${Town}`
      document.querySelector('.Payment').textContent=`Платіж: ${Payment}`
      document.querySelector('.Comment').textContent=`Кометар: ${Comment}`
      
     
      divTotal.hidden=false
      divFormField.hidden=true

   }
  
   if (event.target.closest('.button_sell'))  {validateInput()}
   if (!event.target.closest('.formField') && !event.target.closest('.watch') && !event.target.closest('.total')) {divTotal.hidden=true}  
}







