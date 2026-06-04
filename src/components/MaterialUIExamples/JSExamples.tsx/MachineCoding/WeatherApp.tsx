import React, { useEffect, useState } from 'react'

function WeatherApp() {
    const [location, setLocation] = useState('')
    const [wethearDetails, setWethearDetails] = useState<any>(null)

    function getWeatherDetails() {
        fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${location}&appid=54702605c8e8d2fe756eaa5b13c3f9c3&units=metric`)
            .then(res => res.json())
            .then(data => setWethearDetails(data))
    }

    console.log(wethearDetails)

  return (
    <>
        <input type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
        <button onClick={getWeatherDetails}>Get weather</button>

        {wethearDetails && <div style={{padding:"10px", width:"20vw", height:"40vh", textAlign:"center", margin:"auto", backgroundColor:"lightcyan"}}>
            <p>{wethearDetails.name}, {wethearDetails.sys.country}</p>
            <p>Weather: {wethearDetails.weather[0].description}</p>
            <p>Temperature: {wethearDetails.main.temp} ℃</p>
            <p>Humidity: {wethearDetails.main.humidity}%</p>
        </div>}
    </>
  )
}

export default WeatherApp