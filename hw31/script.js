// Реалізовуємо форму для реєстрації.

// Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”


// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

const divForm=document.querySelector('.form')
const FormButton=document.querySelector('.button')

FormButton.addEventListener('click', createTable, {'once':true}) 

function createTable (event) {
   event.preventDefault() //отменить отправку формы
   if (event.target.closest ('.button')) {
      
      divForm.hidden=true//скрыли форму

 


      const divTable = document.createElement('div')//создали табличку
      divTable.classList.add('table') //добавили класс табличке
      divTable.insertAdjacentHTML( //наполнили табличку данными без значений
         'afterbegin', 
         `
         <table>
         <tr>
            <td>Ім'я:</td>
            <td class="name"></td>
         </tr>
         <tr>
            <td>Прізвище:</td>
            <td class="surname"></td>
         </tr>
         <tr>
            <td>День народження:</td>
            <td class="birthday"></td>
         </tr>
         <tr>
            <td>Стать:</td>
            <td class="gender"></td>
         </tr>
         <tr>
            <td>Місто:</td>
            <td class="town"></td>
         </tr>
         <tr>
            <td>Адреса:</td>
            <td class="address"></td>
         </tr>
         <tr >
            <td >Мови, якими володіє</td>
            <td class="language"></td> 
           
         </tr>
         </table>
         `
      )
      divForm.insertAdjacentElement('afterend', divTable)//вставили табличку в html

      console.log(divTable)
      //получаем данные
      
      const Name=document.querySelector('input[name="name"]')
      console.log(Name)
      const SurName=document.querySelector('input[name="surname"]')
      console.log(SurName)
      const BirthdayData=document.querySelector('input[name="birthday"]')
      console.log(BirthdayData)

      const GenderMale=document.querySelectorAll('input[name="gender"]')[0]
      console.log(GenderMale)
      const GenderFemale=document.querySelectorAll('input[name="gender"]')[1]
      console.log(GenderFemale)

      const Town =document.querySelector('select[name="town"]')
      console.log(Town)
      const Address =document.querySelector('textarea[name="textarea"]')
      console.log(Address)


      const LanguageEnglish =document.querySelectorAll('input[name="language"]')[0]
      console.log(LanguageEnglish)
      const LanguageFranch =document.querySelectorAll('input[name="language"]')[1]
      console.log(LanguageFranch)
      const LanguageItalian =document.querySelectorAll('input[name="language"]')[2]
      console.log(LanguageItalian)
      const LanguageSpanish =document.querySelectorAll('input[name="language"]')[3]
      console.log(LanguageSpanish)
      const LanguageGermany =document.querySelectorAll('input[name="language"]')[4]
      console.log(LanguageGermany)


      // примитивная валидация данных и их вставка в таблицу
      validateInput()
      function validateInput () {
     
         if (/^\d+$/.test(Name.value) || Name.value==='') {return confirm ('ancorrect name'), divTable.hidden=true}//проверка на текст и пустой ввод
         else {document.querySelector('.name').textContent=`${Name.value}`}// вставка в таблицу

         if (/^\d+$/.test(SurName.value) || SurName.value==='') {return confirm ('ancorrect surname'), divTable.hidden=true}
         else {document.querySelector('.surname').textContent=`${SurName.value}`}

         document.querySelector('.birthday').textContent=`${BirthdayData.value}`



        if (GenderMale.checked===true) { 
         document.querySelector('.gender').textContent=`${GenderMale.value}`}
        if (GenderFemale.checked===true) {
         document.querySelector('.gender').textContent=`${GenderFemale.value}`}

         document.querySelector('.town').textContent=`${Town.value}`
         document.querySelector('.address').textContent=`${Address.value}`


         
         if (LanguageEnglish.checked===true) { 
         const ElementEnglish=document.createElement('span') 
         document.querySelector('.language').insertAdjacentElement('afterbegin', ElementEnglish) 
         ElementEnglish.textContent=`${LanguageEnglish.value}, `}


         if (LanguageFranch.checked===true) {
         const ElementFranch=document.createElement('span')
         document.querySelector('.language').insertAdjacentElement('afterbegin', ElementFranch)
         ElementFranch.textContent=`${LanguageFranch.value}, `}

         
   
         if (LanguageItalian.checked===true) {
         const ElementItalian=document.createElement('span')
         document.querySelector('.language').insertAdjacentElement('afterbegin', ElementItalian)
         ElementItalian.textContent=`${LanguageItalian.value}, `}

         
         if (LanguageSpanish.checked===true) {
         const ElementSpanish=document.createElement('span')
         document.querySelector('.language').insertAdjacentElement('afterbegin', ElementSpanish)
         ElementSpanish.textContent=`${LanguageSpanish.value}, `}
         
            
         if (LanguageGermany.checked===true) {
         const ElementGermany=document.createElement('span')
         document.querySelector('.language').insertAdjacentElement('afterbegin', ElementGermany)
         ElementGermany.textContent=`${LanguageGermany.value}, `}
         
      }
    
   }
   
}
