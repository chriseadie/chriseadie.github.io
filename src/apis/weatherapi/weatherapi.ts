import { Response } from "../../models/ApiResponseModels";
import { IWeatherApi } from "../interfaces/IWeatherApi";
import axios from 'axios'

export class WeatherApi implements IWeatherApi {
    
    private apiKey = process.env.OPEN_WEATHER_API_KEY;
    private lat:string = "55.8554082";
    private lon:string = "-4.3152956";
    private apiRoot = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`

    constructor(){}

    async getCurrentForcast(): Promise<Response<any>> {
        const result = await axios.get(this.apiRoot);
        return new Response(result.data);
        // return new Response({
        //     "coord": {
        //         "lon": -4.3153,
        //         "lat": 55.8554
        //     },
        //     "weather": [
        //         {
        //             "id": 802,
        //             "main": "Clouds",
        //             "description": "scattered clouds",
        //             "icon": "03n"
        //         }
        //     ],
        //     "base": "stations",
        //     "main": {
        //         "temp": 277.83,
        //         "feels_like": 276.68,
        //         "temp_min": 276.77,
        //         "temp_max": 278.12,
        //         "pressure": 1011,
        //         "humidity": 84
        //     },
        //     "visibility": 10000,
        //     "wind": {
        //         "speed": 1.54,
        //         "deg": 100
        //     },
        //     "clouds": {
        //         "all": 40
        //     },
        //     "dt": 1702483632,
        //     "sys": {
        //         "type": 2,
        //         "id": 47674,
        //         "country": "GB",
        //         "sunrise": 1702456759,
        //         "sunset": 1702482204
        //     },
        //     "timezone": 0,
        //     "id": 2648579,
        //     "name": "Glasgow",
        //     "cod": 200
        // })
    }

}

