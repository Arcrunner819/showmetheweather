$(document).ready(function() {
  $.getJSON("http://ipinfo.io/json", function(data) {
    var ipdata = JSON.stringify(data);
    var obj = JSON.parse(ipdata);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + obj.postal + ",us" + "&APPID=6170f94b82996e99d1820c54af6208f1", function(weather) {
      var newWeather = JSON.stringify(weather)
      var obj2 = JSON.parse(newWeather)
      var temp = obj2.main.temp

      var maxTemp = obj2.main.temp_max
      var minTemp = obj2.main.temp_min

      var toFahr = Math.floor(temp * (9 / 5) - 459.67) + "°F"
      var toCels = Math.floor(temp - 273.15) + "°C"
      var toMax = Math.floor(maxTemp * (9 / 5) - 459.67)
      var toMin = Math.floor(minTemp * (9 / 5) - 459.67)

      document.getElementById("temperature").innerHTML = "<img width=120 src='http://openweathermap.org/img/w/" + obj2.weather[0].icon + ".png'></br>" + "Current Temperature: " + toFahr + "</br>" + "High for Today: " + toMax + "°F </br>" + "Low for Today: " + toMin + "°F"
      console.log(obj2)

      document.getElementById("location").innerHTML = "Location: " + obj2.name + "</br>" + "Humidity: " + obj2.main.humidity +"%"

      $("#conv").click(function() {
        if (document.getElementById("temperature").innerHTML == toCels) {
          document.getElementById("temperature").innerHTML = toFahr
        } else {
          document.getElementById("temperature").innerHTML = toCels
        };

      })

    })

  })

});
