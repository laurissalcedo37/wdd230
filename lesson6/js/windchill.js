var tempeture = document.querySelector("#tempeture").innerHTML;
var windspeed = document.querySelector("#windspeed").innerHTML;

var f = Math.round(35.74 + (0.6215 * tempeture) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * tempeture * Math.pow(windspeed, 0.16)));

if (tempeture > 50 && windspeed > 3.0) {
    document.querySelector("#windchill").innerHTML = "N/A";
} else {
    document.querySelector("#windchill").innerHTML = f;
}