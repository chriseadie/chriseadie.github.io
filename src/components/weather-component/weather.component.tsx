import React, { useEffect, useState } from "react"
import { useInject } from "../../code/hooks"
import { WeatherApi } from "../../apis/weatherapi/weatherapi"
import { IWeatherApi } from "../../apis/interfaces/IWeatherApi"

export function WeatherComponent(){

    var weatherService = useInject<IWeatherApi>(WeatherApi)
    const [state,setState] = useState({
        desc:"...",
        id:0
    })

    // useEffect(() => {
    //     weatherService.getCurrentForcast().then((res) => {
    //         let weather = res.data.weather[0];
    //         setState({
    //             desc:weather.description,
    //             id:weather.id
    //         })
    //     })
    // },[])

    return (
        <div className="weather-container mr-2 ml-5" style={{maxWidth:500,textAlign:"center"}}>
            <span style={{fontSize:"4rem",color:"white"}}><WeatherIcon id={state.id} /></span>
            <h2>The current weather in Glasgow is <span className="underline capitalize" style={{textWrap:"nowrap"}}>{state.desc}</span></h2>
        </div>
    )
}

function WeatherIcon({id}:{id:number}){
    if(id == 0) return null;

    if(id >= 200 && id <= 232) return <i className="fa-solid fa-cloud-bolt"></i>

    if(id >= 300 && id <= 321) return <i className="fa-solid fa-cloud-rain"></i>

    if(id >= 500 && id <= 531) return <i className="fa-solid fa-cloud-showers-heavy"></i>

    if(id >= 600 && id <= 622) return <i className="fa-solid fa-snowflake"></i>

    if(id >= 701 && id <= 781) return <i className="fa-solid fa-poo-storm"></i>

    if(id == 800) return <i className="fa-solid fa-sun"></i>

    if(id >= 801 && id <= 804) return <i className="fa-solid fa-cloud"></i>
}