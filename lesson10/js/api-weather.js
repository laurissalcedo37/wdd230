const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Preston&units=imperial&appid=0efbfc14fa861e0ae067b5f38772f986"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
const desc = jsObject.weather[0].description;  
document.getElementById('imagesrc').textContent = imagesrc; 
document.getElementById('icon').setAttribute('src', imagesrc);  
document.getElementById('icon').setAttribute('alt', desc);
});