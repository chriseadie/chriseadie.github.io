import { Response } from "../../models/ApiResponseModels";
import { ApiController } from "../apicontroller";
import { IWeatherApi } from "../interfaces/IWeatherApi";
import axios from 'axios'

export class WeatherApi extends ApiController implements IWeatherApi {

    constructor(){
        super()
    }

    async getCurrentForcast(): Promise<Response<any>> {
        const result = await axios.get(`${this.apiRoot}/api/weather`);
        return new Response(result.data);
    }

}

