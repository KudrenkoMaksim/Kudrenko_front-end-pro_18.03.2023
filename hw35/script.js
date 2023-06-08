const divForm=document.querySelector('.form')
const form =document.querySelector('form')
const weather=document.querySelector('.weather')
let formData

form.addEventListener('submit', showWeather)
async function showWeather (event) {
   event.preventDefault()
   formData=document.forms.weather.city
   console.log(formData)
   console.log(formData.value)
   try { 
      const response= await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formData.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`)).json()
      console.log(response)
      weatherShow(response)
   }
   catch (error){ confirm ('enter write city name')}
}

function weatherShow (obj) {
   const city=obj.name
   console.log(city)
   const temp=obj.main.temp
   console.log(temp)
   const pressure=obj.main.pressure
   console.log(pressure)
   const description=obj.weather[0].description
   console.log(description)
   const humidity=obj.main.humidity
   console.log(humidity)
   const speed=obj.wind.speed
   console.log(speed)
   const deg=obj.wind.deg
   console.log(deg)
   const icon=obj.weather[0].icon
   console.log(icon)
   let windDeg;
   if (deg===0 || deg===360) {windDeg='Північний'}
   if (deg>0 && deg<90) {windDeg='Північно-східний'}
   if (deg===90) {windDeg='Східний'}
   if (deg>90 && deg<135) {windDeg='Південно-східний'}
   if (deg===135) {windDeg='Південний'}
   if (deg>135 && deg<275) {windDeg='Південно-західний'}
   if (deg===275) {windDeg='Західний'}
   if (deg>275 && deg<360) {windDeg='Північно-західний'}



   weather.innerHTML=
   `
   <div class="container">
        <div class="city">Місто: ${city}</div>
        <div class="img">
          <img src="http://openweathermap.org/img/w/${icon}.png">
        </div>
        <div class="description">Опис: ${description}</div>
        <div class="temp">Температура: ${temp} град.С</div>
        <div class="pressure">Тиск: ${pressure} мм рт. ст.</div>
        <div class="humidity">Вологість повітря: ${humidity} %</div>
        <div class="speed">Швидкість вітру: ${speed} м/с</div>
        <div class="deg">Напрям вітру: ${windDeg}</div>
   `
   
}

