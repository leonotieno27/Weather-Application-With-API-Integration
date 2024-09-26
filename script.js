//variables i'll use
let api = "838db93aadacc05c13808bd16965ee1a"

//check weather function
document.getElementById('submitBtn').addEventListener('click', async function () {
    var city = document.getElementById('city-input').value;
    var weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units-metric`;
    var response = await fetch(weatherLink);
    if (!response.ok) {
        var elError = document.querySelector('.error');
        elError.innerHTML = "<span class = 'error'>I CAN'T FIND IT!😲</span><br>Refreshing in 3 seconds..."
        setTimeout(function () {
            window.location.reload();
        }, 3000);

    } else {
        data = await response.json();
    }
    console.log(data)

    //getting and showing data in the web
    //country
    var country = data.sys.country;
    const countryName = document.querySelector('.country-name');  //get element to show data
    countryName.textContent = country.toUpperCase(); //show data

    //temp
    var temp = data.main.temp;
    const tempdata = document.querySelector('.temp');  //get element to show data
    tempdata.textContent = temp + ' °C'; //show data

    //city
    var name = data.name;
    const cityName = document.querySelector('.city-name');  //get element to show data
    cityName.textContent = name.toUpperCase(); //show data

    //description
    var weather = data.weather[0].description;
    const weatherName = document.querySelector('.weather-desc');  //get element to show data
    weatherName.textContent = weather.toUpperCase(); //show data

    //emoji
    const iconElement = document.querySelector('.emoji');  //get element to show data
    icon = getWeatherDescription();
    iconElement.textContent = icon; //show data

    //humidity
    var humidity = data.main.humidity;
    const elHumidity = document.querySelector('.humidity');  //get element to show data
    elHumidity.textContent = 'HUMIDITY: ' + humidity + ' %'; //show data

    //pressure
    var pressure = data.main.pressure;
    const elPressure = document.querySelector('.pressure');  //get element to show data
    elPressure.textContent = 'PRESSURE: ' + pressure + ' hPa'; //show data

    //windspeed
    var windSpeed = data.wind.speed;
    var windDirection = data.wind.deg;
    const elwind = document.querySelector('.wind-speed');  //get element to show data
    elwind.innerHTML = '<span class = "speed">WIND SPEED: ' + windSpeed + ' m/s </span>' + '<br>' + '<span class = "degrees">WIND DIRECTION: ' + windDirection + ' deg </span>'; //show data

    //sea-level
    var sea = data.main.sea_level;
    const elSea = document.querySelector('.sea-level');  //get element to show data
    elSea.textContent = 'SEA LEVEL: ' + sea + ' hPa'; //show data

    //get weather emoji function
    function getWeatherDescription() {
        desc = weather;

        if (desc.includes('clear')) {
            return '☀️'
        }
        else if (desc.includes('cloud')) {
            return '☁️'
        }
        else if (desc.includes('rain')) {
            return '🌧️'
        }
        else if (desc.includes('thunderstorm')) {
            return '⛈️'
        }
        else if (desc.includes('snow')) {
            return '❄️'
        }
        else if (desc.includes('mist')) {
            return '🌫️'
        } else {
            return '🌍';
        }

    }

})

