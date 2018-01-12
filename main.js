var searchBox = document.getElementById("search-box");
var bodyTag = document.querySelector("body");
var timeTag = document.getElementById("time");
var conditionsTag = document.getElementById("conditions");
var temperatureTag = document.getElementById("temperature");

var weather;

window.onload = function(){
    setBackground();
    setTime();
    setWeather();
    setPlaceholder();
}

//AJAX-ish
var resetText = setInterval(function(){
    setPlaceholder();
    setTime();
}, 10000);

function setTime(){
    var now = new Date();
    timeTag.innerHTML = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);
}

function setBackground(){
    var rand = Math.floor(Math.random() * 16);
    switch (rand){
        case 0:
            bodyTag.style.backgroundImage = "url('backgrounds/galaxy.jpg')";
            break;
        case 1:
            bodyTag.style.backgroundImage = "url('backgrounds/graphicine_chris_foss.jpg')";
            break;
        case 2:
            bodyTag.style.backgroundImage = "url('backgrounds/diggers_chris_foss.jpg')";
            break;
        case 3:
            bodyTag.style.backgroundImage = "url('backgrounds/cave-entrance.jpg')";
            break;
        case 4:
            bodyTag.style.backgroundImage = "url('backgrounds/hong-kong-skyline.jpeg')";
            bodyTag.style.backgroundPosition = "center";
            break;
        case 5:
            bodyTag.style.backgroundImage = "url('backgrounds/central-park.jpg')";
            bodyTag.style.backgroundPosition = "center";
            break;
        case 6:
            bodyTag.style.backgroundImage = "url('backgrounds/globe_quote.jpg')";
            break;
        case 7:
            bodyTag.style.backgroundImage = "url('backgrounds/green-canyon.jpg')";
            break;
        case 8:
            bodyTag.style.backgroundImage = "url('backgrounds/rain-bokeh.jpg')";
            break;
        case 9:
            bodyTag.style.backgroundImage = "url('backgrounds/luoping.jpg')";
            break;
        case 10:
            bodyTag.style.backgroundImage = "url('backgrounds/yellow-green_field.jpg')";
            break;
        case 11:
            bodyTag.style.backgroundImage = "url('backgrounds/french-castle.jpg')";
            break;
        case 12:
            bodyTag.style.backgroundImage = "url('backgrounds/totoro.jpg')";
            bodyTag.style.backgroundPosition = "center top";
            break;
        case 13:
            bodyTag.style.backgroundImage = "url('backgrounds/moving-castle.jpg')";
            break;
        case 14:
            bodyTag.style.backgroundImage = "url('backgrounds/colony.jpg')";
            break;
        case 15:
            bodyTag.style.backgroundImage = "url('backgrounds/departure.jpg')";
            bodyTag.style.backgroundPosition = "center bottom";
            break;
    }
}

function setPlaceholder(){
    var rand = Math.floor(Math.random() * 36);
    switch (rand){
        case 0:
            animateText("How do I get to Mars?");
            break;
        case 1:
            animateText("How big is Jupiter?");
            break;
        case 2:
            animateText("What's at the edge of the universe?");
            break;
        case 3:
            animateText("Chicken or egg?");
            break;
        case 4:
            animateText("Why do we have to sleep?");
            break;
        case 5:
            animateText("Why do cats always land on their feet?");
            break;
        case 6:
            animateText("What's the longest river on Earth?");
            break;
        case 7:
            animateText("How wide is the solar system?");
            break;
        case 8:
            animateText("Why isn't Pluto a planet?");
            break;
        case 9:
            animateText("Why is sunset red?");
            break;
        case 10:
            animateText("Why is the sky blue?");
            break;
        case 11:
            animateText("Where are the aliens?");
            break;
        case 12:
            animateText("Do ghosts exist?");
            break;
        case 13:
            animateText("Where is the nearest galaxy?");
            break;
        case 14:
            animateText("Where is the nearest galaxy?");
            break;
        case 15:
            animateText("What is love?");
            break;
        case 16:
            animateText("What is the meaning of life?");
            break;
        case 17:
            animateText("What happens when I die?");
            break;
        case 18:
            animateText("When will the world end?");
            break;
        case 19:
            animateText("How small is an atom?");
            break;
        case 20:
            animateText("How hot is the sun?");
            break;
        case 21:
            animateText("How far is the moon?");
            break;
        case 22:
            animateText("When did humans first emerge?");
            break;
        case 23:
            animateText("When was the wheel invented?");
            break;
        case 24:
            animateText("When was the industrial revolution?");
            break;
        case 25:
            animateText("What is dark energy?");
            break;
        case 26:
            animateText("How did life begin?");
            break;
        case 27:
            animateText("Are we alone in the universe?");
            break;
        case 28:
            animateText("What is consciousness?");
            break;
        case 29:
            animateText("What does my dream mean?");
            break;
        case 30:
            animateText("Is there a multiverse?");
            break;
        case 31:
            animateText("Is time-travel possible?");
            break;
        case 32:
            animateText("Where's my robot butler?");
            break;
        case 33:
            animateText("What's inside a black hole?");
            break;
        case 34:
            animateText("Can we live forever?");
            break;
        case 35:
            animateText("What makes us human?");
            break;
    }
}

function setWeather(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=" + apiKey + "&units=metric", true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            weather = JSON.parse(xhttp.responseText);
            var now = new Date();
            //Remove all classes except 'wi'
            for (var i = 1; i < conditionsTag.classList.length; i++){
                conditionsTag.classList.remove(conditionsTag.classList[i]);
            }
            //Current Time
            var curHours = now.getHours();
            //Class to Add
            var toAdd;
            wID = weather.weather[0].id;
            if (curHours >= 6 && curHours < 19){
                if ((wID >= 200) && (wID < 300)) {
                    toAdd = "wi-day-thunderstorm";
                } else if ((wID >= 300) && (wID < 400)){
                    toAdd = "wi-day-sprinkle"; 
                } else if ((wID >= 500) && (wID < 600)){
                    toAdd = "wi-day-rain"; 
                } else if ((wID >= 600) && (wID < 700)){
                    toAdd = "wi-day-fog"; 
                } else if ((wID >= 700) && (wID < 800)){
                    toAdd = "wi-day-rain"; 
                } else if (wID == 800){
                    toAdd = "wi-day-sunny"; 
                } else if ((wID >= 801) && (wID < 803)){
                    toAdd = "wi-day-cloudy"; 
                } else if ((wID >= 803) && (wID < 900)){
                    toAdd = "wi-day-sunny-overcast"; 
                } else if (wID == 900){
                    toAdd = "wi-tornado"; 
                } else if ((wID == 901) || ((wID >= 960) && (wID <= 961))){
                    toAdd = "wi-day-storm-showers"; 
                } else if ((wID == 902) || wID == 962){
                    toAdd = "wi-hurricane"; 
                } else if (wID == 904){
                    toAdd = "wi-hot"; 
                } else if ((wID == 905) || ((wID > 951) && (wID <= 959))){
                    toAdd = "wi-day-windy"; 
                } else if (wID == 906){
                    toAdd = "wi-day-hail"; 
                } else {
                    toAdd = "wi-day-sunny-overcast";
                }
            } else {
                if ((wID >= 200) && (wID < 300)){
                    toAdd = "wi-night-alt-thunderstorm";
                } else if ((wID >= 300) && (wID < 400)){
                    toAdd = "wi-night-alt-sprinkle"; 
                } else if ((wID >= 500) && (wID < 600)){
                    toAdd = "wi-night-alt-rain"; 
                } else if ((wID >= 600) && (wID < 700)){
                    toAdd = "wi-night-fog"; 
                } else if ((wID >= 700) && (wID < 800)){
                    toAdd = "wi-night-alt-rain"; 
                } else if (wID == 800){
                    toAdd = "wi-night-clear"; 
                } else if ((wID >= 801) && (wID < 803)){
                    toAdd = "wi-night-alt-cloudy"; 
                } else if ((wID >= 803) && (wID < 900)){
                    toAdd = "wi-night-alt-partly-cloudy"; 
                } else if (wID == 900){
                    toAdd = "wi-tornado"; 
                } else if ((wID == 901) || ((wID >= 960) && (wID <= 961))){
                    toAdd = "wi-night-alt-storm-showers"; 
                } else if ((wID == 902) || wID == 962){
                    toAdd = "wi-hurricane"; 
                } else if (wID == 904){
                    toAdd = "wi-hot"; 
                } else if ((wID == 905) || ((wID > 951) && (wID <= 959))){
                    toAdd = "wi-night-alt-cloudy-windy"; 
                } else if (wID == 906){
                    toAdd = "wi-night-alt-hail";
                } else {
                    toAdd = "wi-night-alt-partly-cloudy";
                }
            }
            conditionsTag.classList.add(toAdd);
            temperatureTag.innerText = Math.round(weather.main.temp) + "°C";
        }
    }
}

function animateText(text){
    var i = 0;
    var handle = setInterval(function(){
        i++;
        searchBox.setAttribute("placeholder",text.slice(0, i));
        if (i >= text.length){
            clearInterval(handle);
            setTimeout(function(){animateReverse(text);}, 5000);
        }
    }, 90);
}

function animateReverse(text){
    i = text.length;
    var handle1 = setInterval(function(){
        i--;
        searchBox.setAttribute("placeholder",text.slice(0, i));
        if (i <= 0){
            clearInterval(handle1);
        }
    }, 40);
}