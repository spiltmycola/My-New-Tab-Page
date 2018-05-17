var searchBox = document.getElementById("search-box");
var bodyTag = document.querySelector("body");
var timeTag = document.getElementById("time");
var conditionsTag = document.getElementById("conditions");
var temperatureTag = document.getElementById("temperature");

var weather;

var questions = ["How do I get to Mars?",
    "How big is Jupiter?",
    "What's at the edge of the universe?",
    "Chicken or egg?",
    "Why do we have to sleep?",
    "Why do cats always land on their feet?",
    "What's the longest river on Earth?",
    "How wide is the solar system?",
    "Why isn't Pluto a planet?",
    "Why is sunset red?",
    "Why is the sky blue?",
    "Where are the aliens?",
    "Do ghosts exist?",
    "Where is the nearest galaxy?",
    "Where is the nearest galaxy?",
    "What is love?",
    "What is the meaning of life?",
    "What happens when I die?",
    "When will the world end?",
    "How small is an atom?",
    "How hot is the sun?",
    "How far is the moon?",
    "When did humans first emerge?",
    "When was the wheel invented?",
    "When was the industrial revolution?",
    "What is dark energy?",
    "How did life begin?",
    "Are we alone in the universe?",
    "What is consciousness?",
    "What does my dream mean?",
    "Is there a multiverse?",
    "Is time-travel possible?",
    "Where's my robot butler?",
    "What's inside a black hole?",
    "Can we live forever?",
    "What makes us human?"
];

var bgImages = [
    ["url('backgrounds/galaxy.jpg')",""],
    ["url('backgrounds/graphicine_chris_foss.jpg')",""],
    ["url('backgrounds/diggers_chris_foss.jpg')",""],
    ["url('backgrounds/cave-entrance.jpg')",""],
    ["url('backgrounds/hong-kong-skyline.jpeg')","center"],
    ["url('backgrounds/central-park.jpg')","center"],
    ["url('backgrounds/globe_quote.jpg')",""],
    ["url('backgrounds/green-canyon.jpg')",""],
    ["url('backgrounds/rain-bokeh.jpg')",""],
    ["url('backgrounds/luoping.jpg')",""],
    ["url('backgrounds/yellow-green_field.jpg')",""],
    ["url('backgrounds/french-castle.jpg')",""],
    ["url('backgrounds/totoro.jpg')","center top"],
    ["url('backgrounds/moving-castle.jpg')",""],
    ["url('backgrounds/colony.jpg')",""],
    ["url('backgrounds/departure.jpg')","center bottom"]
];

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
    var rand = Math.floor(Math.random() * bgImages.length);
    bodyTag.style.backgroundImage = bgImages[rand][0];
    bodyTag.style.backgroundPosition = bgImages[rand][1];
}

function setPlaceholder(){
    var rand = Math.floor(Math.random() * questions.length);
    animateText(questions[rand]);
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