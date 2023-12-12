import { Response } from "../../models/ApiResponseModels";
import { IWeatherApi } from "../interfaces/IWeatherApi";
import axios from 'axios'

export class WeatherApi implements IWeatherApi {
    
    private apiKey = "";
    private lat:string = "55.8554082";
    private lon:string = "-4.3152956";
    private apiRoot = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`

    constructor(){}

    async getCurrentForcast(): Promise<Response<any>> {
        const result = await axios.get(this.apiRoot);
        return new Response(result.data);
    }

}

