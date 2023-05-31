'use strict';
const apiKey = "bbb9b6b613f18ef68bfb9684ae34204b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector('.input');
const searchBtn = document.querySelector('.button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherBody = document.querySelector('.weather')

weatherBody.classList.add('display')

const checkWeather = async function(city) {
    //Displaying Api 
    const response = await fetch(apiUrl + city + `&units=imperial&APPID=${apiKey}`);
    let data = await response.json();

    console.log(data)

    //Api Selectors 
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#176;F';
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed}kmh`;

    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    } else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png'
    } else if(data.weather[0].main == 'Drizzel'){
        weatherIcon.src = 'images/drizzel.png'
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    } else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }

    weatherBody.classList.remove('display')
    weatherBody.classList.add('transition')
}

checkWeather();

searchBtn.addEventListener('click',function() {
    checkWeather(searchBox.value);
}) 

document.body.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})
