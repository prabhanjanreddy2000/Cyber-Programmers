import axios from "axios";
import '../styles/weather.css'
import { useEffect, useState } from "react";

export default function Weather(){
    var [coordinates,setCoordinates]=useState({})
    var [weather,setWeather]=useState([])
    var [main,setMain]=useState({})
    var [visibility,setVisibility]=useState("")
    var [wind,setWind]=useState({})
    var [clouds,setClouds]=useState({})
    var [sys,setSys]=useState({})
    var [name,setName]=useState("")
    var [search,setSearch]=useState("")
    var [time,setTime]=useState("")
    
    function setSearchData(e){
        setSearch(e.target.value)
    }
        function getWeatherData(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=55a0ebcb240d607f077934dec3f7822a`)
    .then((res)=>{
        setCoordinates(res.data.coord)
        setWeather(res.data.weather)
        setMain(res.data.main)
        setWind(res.data.wind)
        setClouds(res.data.clouds)
        setVisibility(res.data.visibility)
        setSys(res.data.sys)
        setName(res.data.name)
    })
        }
    var date=new Date()
    
    useEffect(() => {
        const interval = setInterval(() => {
             const newTime = new Date().toLocaleTimeString();
             setTime(newTime);
        }, 1000)
    
        return () => {
            clearInterval(interval);
        }
    }, [time])

    var iconCode=weather.map((x)=>x.icon)
    var iconLink="http://openweathermap.org/img/w/" + iconCode + ".png"
    return(
        <>
        <div className="container-fluid weather-container">
            <div className="row p-2">
                <div className="col-lg-2">
                    <h6>{date.toDateString()}</h6>
                </div>
                <div className="col-lg-8"></div>
                <div className="col-lg-2 text-center">
                    <h6>{time}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <input type="text" className="form-control search-bar" placeholder="Enter City" onChange={setSearchData}/>
                    <br/>
                    <button className="btn btn-outline-light" onClick={getWeatherData}>Get Data</button>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-lg-12 p-3 text-center"><h5>CURRENT WEATHER</h5></div>
                <div className="col-lg-12 first-column">
                    <div className="flex-items">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                        <b>{name}, {sys.country}</b>
                        <br/>
                        Lat: {coordinates.lat} Lon: {coordinates.lon}
                        <br/>
                        Today,{date.toLocaleDateString()}
                    </div>
                    <div className="flex-items text-center">
                        <b>{Math.round(main.temp-273.15)} <sup>o</sup>C</b>
                        <br/>
                        {weather.map((x)=>x.description)}
                    </div>
                    <div className="flex-items">
                        <img src={iconLink}/>
                    </div>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-lg-12 text-center p-3"><h5>AIR CONDITIONS</h5></div>
                <div className="col-lg-12 second-column">
                    <div className="flex-items">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"/></svg> (feels {Math.round(main.feels_like-273.15)} <sup>o</sup>C)
                    <br/>
                    <b>{Math.round(main.temp-273.15)} <sup>o</sup>C</b>
                    </div>
                    <div className="flex-items">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg> Wind
                    <br/>
                    <b>{wind.speed} m/s</b>
                    </div>
                    <div className="flex-items">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M260-160q-92 0-156-64T40-380q0-78 48.5-137.5T210-594q25-90 99-148t171-58q119 0 199.5 82.5T760-520q75 8 117.5 62T920-341q0 75-52.5 128T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-63 0-112 34.5T296-597q78 13 131 73.5T480-380h-80q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/></svg> Clouds
                    <br></br>
                    <b>{clouds.all} %</b>             
                    </div>
                    <div className="flex-items">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"/></svg> Humidity 
                    <br></br>
                    <b>{main.humidity} %</b>
                    </div>
                    <div className="flex-items">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg> Visibility
                    <br/>
                    <b>{visibility} m</b>
                    </div>
                </div>
            </div>
            <div>
                <hr width="50%" className=" mx-auto"/>
            </div>
            <div className="row p-3">
                <div className="col-lg-12 text-center"><h5>ADDITIONAL INFO</h5></div>
                <div className="col-lg-12 third-column">
                    <div className="flex-items">
                        <b>Max-temp: {Math.round(main.temp_max-273.15)} <sup>o</sup>C</b>
                        <br/>
                        <b>Min-temp: {Math.round(main.temp_min-273.15)} <sup>o</sup>C</b>
                    </div>
                    <div className="flex-items">
                        <b>Pressure: {main.pressure} hPa</b>
                        <br/>
                        <b>Sea Level: {main.sea_level} hPa</b>
                        <br/>
                        <b>Ground Level: {main.grnd_level} hPa</b>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}