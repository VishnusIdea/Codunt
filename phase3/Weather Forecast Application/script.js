
function createBurst(){
    let animContainer = document.querySelector(".animation-container");
    let burst = document.querySelector(".burst");

    burst.style.top = Math.random() * innerHeight + "px";
    burst.style.left = Math.random() * innerWidth + "px";

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 2000);
}
setInterval(createBurst, 200);
 

const apiKey = "2d0451b3170de837a123477516bf4e99";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.jpg"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.jpg"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }

            document.querySelector(".weather").style.display  = "block" ;             
}


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
} )

checkWeather()









