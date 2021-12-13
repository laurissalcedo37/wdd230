const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Bogota&units=imperial&appid=0efbfc14fa861e0ae067b5f38772f986";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const description = jsObject.weather[0].description;
    document.getElementById('current').innerHTML = description;
    document.getElementById('temp').innerHTML = Math.round(jsObject.main.temp);
    document.getElementById('humidity').innerHTML = jsObject.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(jsObject.wind.speed);
  });

const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=Bogota&units=imperial&appid=0efbfc14fa861e0ae067b5f38772f986";

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const dayHeadings = document.querySelectorAll("#days");
    const temps = document.querySelectorAll("#tempday");
    const imgs = document.querySelectorAll("#images");

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    let day = 0;
    for (item of jsObject.list) {
      if (item.dt_txt.includes('18:00:00')) {
        const date = new Date(item.dt * 1000).getDay();
        const iconsrc = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
        const temp = item.main.temp_max;

        dayHeadings[day].innerHTML = dayOfWeek[date];
        temps[day].innerHTML = temp.toFixed(0);
        imgs[day].setAttribute("src", iconsrc);

        day++;
      }
    }
  });