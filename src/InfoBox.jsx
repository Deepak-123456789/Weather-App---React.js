import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({ info })
{
    const haze_img="https://images.unsplash.com/photo-1604424288891-7f0871867e09?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_img = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_img = "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_img = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div className="infobox">
            <div className="container">
            <Card  sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>=80 ? rain_img :(info.temp>15 ?hot_img:(info.temp>10 ?haze_img:cold_img))}
                    
                />
                <CardContent id="content">
                    <Typography gutterBottom variant="h5" component="div">
                            {info.city}  &nbsp;&nbsp;
                            {info.humidity >= 80 ? <ThunderstormIcon /> : (info.temp > 15 ? <WbSunnyIcon /> : (info.temp > 10 ? <AcUnitIcon /> : <AcUnitIcon />))}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp }&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min temp = {info.tempmin }&deg;C</p>
                    <p>Max temp = {info.tempmax }&deg;C</p>
                    <p>Weather is described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
      
            </Card>
            </div>   
        </div>
    );
}