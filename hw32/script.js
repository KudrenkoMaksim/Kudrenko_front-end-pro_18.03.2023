// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
// На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
// При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
// Реалізувати можливість видалення замовлення зі списку.



const formMain=document.forms.main
let divElement=document.createElement('div')

let WatchList=[]

let dataWatch2=JSON.parse(localStorage.getItem('watch2')) 
if (dataWatch2!=='' && dataWatch2!==null) {
   WatchList.push(dataWatch2)}

let dataWatch3=JSON.parse(localStorage.getItem('watch3'))
if (dataWatch3!=='' && dataWatch3!==null) {
   WatchList.push(dataWatch3)}

let dataWatch4=JSON.parse(localStorage.getItem('watch4'))
  if (dataWatch4!=='' && dataWatch4!==null) {
   WatchList.push(dataWatch4)}

let dataWatch5=JSON.parse(localStorage.getItem('watch5'))
if (dataWatch5!=='' && dataWatch5!==null) {
   WatchList.push(dataWatch5)}



   
   for (let i=0; i<WatchList.length; i++) { 
   watchInfo(WatchList[i]) 
   }
   
console.log(WatchList)

// получение данных из document

// Watch2
const nameWatch2=document.querySelector('.nameWatch2').textContent
const priceWatch2 =document.querySelector('.priceWatch2').textContent
const mechanismWatch2=document.querySelector('.mechanismWatch2').textContent
const waterResistWatch2=document.querySelector('.waterResistWatch2').textContent
const glassWatch2=document.querySelector('.glassWatch2').textContent

// Watch3
const nameWatch3=document.querySelector('.nameWatch3').textContent
const priceWatch3 =document.querySelector('.priceWatch3').textContent
const mechanismWatch3=document.querySelector('.mechanismWatch3').textContent
const waterResistWatch3=document.querySelector('.waterResistWatch3').textContent
const glassWatch3=document.querySelector('.glassWatch3').textContent

// Watch4
const nameWatch4=document.querySelector('.nameWatch4').textContent
const priceWatch4 =document.querySelector('.priceWatch4').textContent
const mechanismWatch4=document.querySelector('.mechanismWatch4').textContent
const waterResistWatch4=document.querySelector('.waterResistWatch4').textContent
const glassWatch4=document.querySelector('.glassWatch4').textContent

// Watch5
const nameWatch5=document.querySelector('.nameWatch5').textContent
const priceWatch5 =document.querySelector('.priceWatch5').textContent
const mechanismWatch5=document.querySelector('.mechanismWatch5').textContent
const waterResistWatch5=document.querySelector('.waterResistWatch5').textContent
const glassWatch5=document.querySelector('.glassWatch5').textContent






// функция: формируем объекты из характеристик часов, добавляем в массив watchList, 
// сохраняем в localStorage, запускает функцию WatchInfo 
formMain.addEventListener('click', addItem) 
function addItem (event) {
   event.preventDefault()
   
   if(event.target.closest ('.button_buy2')) {
     
      const objWatch2= {
         name: nameWatch2, 
         price: priceWatch2, 
         mechanism: mechanismWatch2,
         waterResist: waterResistWatch2,
         glass: glassWatch2,
      }
      localStorage.setItem('watch2',JSON.stringify (objWatch2))
      watchInfo(objWatch2)

      WatchList.push(objWatch2)
     
   }
   if(event.target.closest ('.button_buy3')) {
      
      const objWatch3= {
         name: nameWatch3, 
         price: priceWatch3, 
         mechanism: mechanismWatch3,
         waterResist: waterResistWatch3,
         glass: glassWatch3,
      }
      localStorage.setItem('watch3',JSON.stringify (objWatch3))
      watchInfo(objWatch3)
      WatchList.push(objWatch3)
      
   }
   if(event.target.closest ('.button_buy4')) {
     
      const objWatch4= {
         name: nameWatch4, 
         price: priceWatch4, 
         mechanism: mechanismWatch4,
         waterResist: waterResistWatch4,
         glass: glassWatch4,
      }
      localStorage.setItem('watch4',JSON.stringify (objWatch4))
      watchInfo(objWatch4)
      WatchList.push(objWatch4)
      
   }
   if(event.target.closest ('.button_buy5')) {
      
      const objWatch5= {
         name: nameWatch5, 
         price: priceWatch5, 
         mechanism: mechanismWatch5,
         waterResist: waterResistWatch5,
         glass: glassWatch5,
      }
      localStorage.setItem('watch5',JSON.stringify(objWatch5))
      watchInfo(objWatch5)
      WatchList.push(objWatch5)
   }
   
}

//  функция создает элементы HTML из объектов, которые в нее передаются, вставляет эти элементы в HTML
// и скрывает их
function watchInfo (obj) {
   
   let ulElement=document.createElement('ul')
   if (obj.name=="Годинник чоловічий model_2") {
      ulElement.classList.add('elementWatch2')}
   if (obj.name=="Годинник чоловічий model_3") {
      ulElement.classList.add('elementWatch3')}
   if (obj.name=="Годинник чоловічий model_4") {
      ulElement.classList.add('elementWatch4')}
   if (obj.name=="Годинник чоловічий model_5") {
      ulElement.classList.add('elementWatch5')}
   
   ulElement.textContent='Замовлення'

   divElement.append(ulElement)

   let ulButton=document.createElement('button')
   if (obj.name=="Годинник чоловічий model_2") {
   ulButton.classList.add('ulButton2')}
   if (obj.name=="Годинник чоловічий model_3") {
   ulButton.classList.add('ulButton3')}
   if (obj.name=="Годинник чоловічий model_4") {
   ulButton.classList.add('ulButton4')}
   if (obj.name=="Годинник чоловічий model_5") {
   ulButton.classList.add('ulButton5')}

   ulButton.textContent='Видалити'
   ulElement.append(ulButton)

   let liName=document.createElement('li')
   liName.textContent=obj.name
   ulElement.append(liName)

   let liPrice=document.createElement('li')
   liPrice.textContent=obj.price
   ulElement.append(liPrice)

   let liMechanism=document.createElement('li')
   liMechanism.textContent=obj.mechanism
   ulElement.append(liMechanism)

   let liwaterResist=document.createElement('li')
   liwaterResist.textContent=obj.waterResist
   ulElement.append(liwaterResist)

   let liGlass=document.createElement('li')
   liGlass.textContent=obj.glass
   ulElement.append(liGlass)

   formMain.before(divElement)
   divElement.hidden=true
   
   
}



//  при нажатии на кнопку МОЇ ЗАМОВЛЕННЯ скрывает основную часть с часами и показывает список 
//выбранных часов
document.querySelector('.buttonOrders').addEventListener('click', watchInfoShow)
function watchInfoShow () {
   divElement.hidden=false
   formMain.hidden=true
   
}   
//  функция удаления данных из списка и из localStorage
divElement.addEventListener('click', delElem)
function delElem (event) {
   for (let i=0; i<WatchList.length; i++) {
      if (event.target.closest('.ulButton2') && WatchList[i].name=="Годинник чоловічий model_2") {
         localStorage.removeItem('watch2')
         document.querySelector('.elementWatch2').remove()
      }
   }
   for (let i=0; i<WatchList.length; i++) {
      if (event.target.closest('.ulButton3') && WatchList[i].name=="Годинник чоловічий model_3") {
         localStorage.removeItem('watch3')
         document.querySelector('.elementWatch3').remove()
      }
   }
   for (let i=0; i<WatchList.length; i++) {
      if (event.target.closest('.ulButton4') && WatchList[i].name=="Годинник чоловічий model_4") {
         localStorage.removeItem('watch4')
         document.querySelector('.elementWatch4').remove()
      }
   }
   for (let i=0; i<WatchList.length; i++) {
      if (event.target.closest('.ulButton5') && WatchList[i].name=="Годинник чоловічий model_5") {
         localStorage.removeItem('watch5')
         document.querySelector('.elementWatch5').remove()
      }
   }
}












