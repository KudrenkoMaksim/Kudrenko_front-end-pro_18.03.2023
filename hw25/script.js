// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
const finedInput =document.querySelector('input');
const divElement=document.createElement('div');

document.addEventListener('click', textArea)

function textArea (event){
   if (event.target.closest('input')){
      finedInput.insertAdjacentElement('afterend', divElement)

   } else if (!event.target.closest('input')) {
      divElement.remove()
      }
}

