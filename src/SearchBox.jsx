import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setcity] = useState("")
    let [error,seterror]=useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "9e179ef489cae2fa8088b49fc97a146f"

    let weatherinfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonresponse = await response.json();
        console.log(jsonresponse)

        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        }
        console.log(result);
        return result;
        }catch(err){
            throw(err);
        }
    }

    let handlechange = (event) => {
        setcity(event.target.value)

    }
    let handlesubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city)
            setcity("")
            let newinfo = await weatherinfo();
            updateInfo(newinfo);
        }catch(err){
            seterror(true);
        }
      
    };
    
    
    return (
        <div className='searchbox'>
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="enter city" variant="outlined" required value={city} onChange={handlechange} />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit' endIcon={<LocationOnIcon />} className='button'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>no such place exists</p>}
            </form>
            
        </div>
        
    )
}