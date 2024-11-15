const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '63cce6e7dc0e854fe6778888932e5dbf'
const diffKelvin = 273.15;

document.getElementById('buscarButton').addEventListener('click',() => {
    const city = document.getElementById('ciudadImput').value; 
    if(city){
        fetchWeather(city);
    }else{
       alert('Ingrese una ciudad valida');   
    }

})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById('dataResponse')
    divResponseData.innerHTML = ''
    const cityName = data.name
    const countryName = data.sys.country 
    const temp = data.main.temp 
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon
     
    const cityInfo = document.createElement('h1')
    cityInfo.textContent =`${cityName}, ${countryName}`
    const tempinfo = document.createElement('p')
    tempinfo.textContent = `La temperatura es de ${Math.floor(temp-diffKelvin)} °C`
    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del ${humidity} %`
    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const descriptionInfo = document.createElement('h3')
    descriptionInfo.textContent = `${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempinfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)
    

}