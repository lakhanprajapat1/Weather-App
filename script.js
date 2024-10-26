const apikey="741ca2075a3cb5254867b731abd45cd3";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector('.weather-icon')

async function checkweather(city) {
    const response= await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status == 404){
        alert(" Please! Enter A Valid City Name")
    }else{
        var data = await response.json();

        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp/10) + "°c" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity  +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="assets/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="assets/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="assets/rain.png"
        }
        else if(data.weather[0].main=="Drizzel"){
            weatherIcon.src="assets/drizzel.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="assets/mist.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="assets/snow.png"
        }
    }
}

searchBtn.addEventListener('click',()=>{
    checkweather(searchBox.value)
})
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkweather(searchBox.value)
    }
  });
  
