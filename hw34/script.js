const form=document.querySelector('form')
const button =document.querySelector('.button')

const formInputValue=document.querySelector('[name="text"]')
console.log(formInputValue)

const UserId=document.querySelector('.userId')
const Title=document.querySelector('.title')
const Body=document.querySelector('.body')

const buttonComments=document.createElement('button')
buttonComments.classList.add('buttonComments')
buttonComments.textContent='comments'

const postBlock=document.querySelector('.post')
postBlock.hidden=true
const commentBlock=document.querySelector('.comment')

let response

button.addEventListener('click', getInfoPost)
async function getInfoPost (event) {
   event.preventDefault()

   if (formInputValue.value<100 && formInputValue.value>0) {
      try {

         responsePost= await (await fetch (`https://jsonplaceholder.typicode.com/posts/${formInputValue.value}`)).json()
         console.log(responsePost)
         createPost(responsePost)
         postBlock.append(buttonComments)
      }
      catch (error) {console.log(error)}
   }
   else {confirm('error input (numbers 1-100)')}
commentBlock.innerHTML=''
} 


buttonComments.addEventListener('click', getInfoComments)
async function getInfoComments () {
      commentBlock.innerHTML=''
      try {
         responseComment= await (await fetch (`https://jsonplaceholder.typicode.com/posts/${formInputValue.value}/comments`)).json()
         console.log(responseComment)
         for (let i=0; i<responseComment.length; i++) {
         createComment(responseComment[i])
         } 
      }
      catch (error) {console.log(error)}
}

function createPost (obj) {
   postBlock.hidden=false
   UserId.textContent=`user ${obj.userId}`
   console.log(UserId)
   Title.textContent=obj.title
   Body.textContent=obj.body
}

function createComment (obj) {
   const Name=document.createElement('div')
   Name.classList.add('name') 
   Name.textContent=`Name: ${obj.name}`
   const Email=document.createElement('div')
   Email.classList.add('email')
   Email.textContent=`Email: ${obj.email}`
   const BodyComment=document.createElement('div')
   BodyComment.classList.add('bodyComment')
   BodyComment.textContent=`Comment: ${obj.body}`

   let comment=document.createElement('div')
   comment.classList.add('commentBlock')

   comment.append(Name)
   comment.append(Email)
   comment.append(BodyComment)
   commentBlock.append(comment)
}

