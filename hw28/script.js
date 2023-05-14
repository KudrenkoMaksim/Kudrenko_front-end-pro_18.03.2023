// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const getForm=document.forms.formInput
const button=getForm.Button
const textarea=getForm.textArea



button.addEventListener('click', buttonAction)

function buttonAction () {
   if (textarea.value.substr(0,7)==='http://' || textarea.value.substr(0,8)==='https://') {
      getForm.action=textarea.value
      console.log('есть http or https')
      } else {
      getForm.action='https://' + textarea.value
      console.log ('добавилось https')
   }
}
