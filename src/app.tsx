import React from "react";
import { WeatherComponent } from "./components/weather-component/weather.component";

export function App() {
    return (
        <div id="site-wrap">
            <div className="banner">
                <div className="banner_weather">
                    <WeatherComponent/>
                </div>
                <div className="banner__text">
                    <h1>Hello</h1>
                    <h1>I am</h1>
                    <h1>Chris Eadie</h1>
                    <h2>Software Engineer</h2>
                </div>
            </div>
        </div>
    )
}