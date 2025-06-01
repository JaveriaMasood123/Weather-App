function getWeather(){
    let cityName=document.getElementById("city").value;
    let apiKey="3e046219658ebf01fd8f0a02cac3ad66";

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";

     fetch(url)//get karo data weather =>city name : temp : status
      .then(function (response) { //JSON
    return response.json();//JSON = obj
    })
    .then(function (data) {//convertable obj data
    let temp = data.main.temp;
    let condition = data.weather[0].main;//data.
    let name = data.name;//city name
   
    document.getElementById("output").innerHTML =
    "<b>📍 City:</b> " + name + "<br>" +
    "<b>🌡️ Temperature:</b> " + temp + "°C<br>" +
    "<b>🌈 Weather:</b> " + condition;
    })
    .catch(function () {
    document.getElementById("output").innerHTML = "❌ City not found!";
    });
   
}