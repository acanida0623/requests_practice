


function clearCity(){
  var text_input = document.getElementById("city").value = ""
}
function clearState(){
  var text_input = document.getElementById("state").value = ""
}

function keyDown (e) {
  switch(e.keyCode) {
    case 13:
    var city = document.getElementById("city").value
    var state = document.getElementById('state').value
    var request_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+state+'&appid=52e08cd58041deea8b6b10e4eeb5363c&mode=json&units=imperial'
    getWeather(city,state,request_url)

    break;
  }

}


function getWeather (city,state,url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
    console.log(request.status); // HTTP status code
    var r = request.response
    appendWeather(city,state,r);
  }
  request.send();
}

function appendWeather (orig_city,orig_state,res) {
    var json = JSON.parse(res);
    console.log(json['coord']+" response")
  var table_body = document.getElementById("weather_body")
  var tr = document.createElement("tr");
  var city= document.createElement("td")
  var state = document.createElement("td")
  var temp = document.createElement("td")
  var conditions = document.createElement("td")
  city.appendChild(document.createTextNode(orig_city))
  state.appendChild(document.createTextNode(orig_state))
  temp.appendChild(document.createTextNode(json["main"].temp))
  conditions.appendChild(document.createTextNode(json["weather"][0].description))
  tr.appendChild(city)
  tr.appendChild(state)
  tr.appendChild(temp)
  tr.appendChild(conditions)
  table_body.appendChild(tr)
}
window.addEventListener("keydown", keyDown, true);
document.getElementById("city").addEventListener("focus",clearCity,false);
document.getElementById("state").addEventListener("focus",clearState,false);



 // response body
