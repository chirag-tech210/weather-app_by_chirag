import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './Weatherapp.css'
import { useState } from 'react'
export default function WeatherApp() {
    const [weatherinfo, setweatherinfo] = useState({
        city: "Delhi",
        feelslike: 15.46,
        humidity: 67,
        temp: 16.05,
        tempMax: 16.05,
        tempMin: 16.05,
        weather: "smoke"
    })
    let updateInfo = (newinfo) => {
        setweatherinfo(newinfo);
    }
    return (
        <div className='main'>
            <h1><b>Weather App 🌦️ by Chirag</b></h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherinfo} />
        </div>
    )
}