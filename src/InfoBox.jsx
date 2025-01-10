import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Infobox.css'
export default function InfoBox({ info }) {
    let img = "https://images.unsplash.com/photo-1663822272766-ffac4f99552a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvZ2d5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    let img_hot = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA="
    let img_cold = "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=612x612&w=0&k=20&c=LKgdYGIdh94AZ9Q5F9IE5TSHY1zz4oP4uauG79KIN8w="
    let img_rain = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=612x612&w=0&k=20&c=GUJvhhU3WVvHhJ3kU4E33fVUzICegLq1sh2msWS5kNk="
    return (
        <div className="infobox">
            <h2>Weather Info - {info.weather}</h2>
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 70 ? img_rain : (info.temp > 25 ? img_hot : img_cold)}
                            alt="weather"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}{info.humidity > 70 ? <ThunderstormIcon /> : (info.temp > 25 ? <WbSunnyIcon /> : <AcUnitIcon />)}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                                <div>
                                    <p>Temerature = {info.temp}&deg;C</p>
                                    <p>Maximun Temerature = {info.tempMax}&deg;C</p>
                                    <p>Minimun Temerature = {info.tempMin}&deg;C</p>
                                    <p>Humidity = {info.humidity}</p>
                                    <p>Feels Like ={info.feelslike}&deg;C</p>
                                </div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
};
