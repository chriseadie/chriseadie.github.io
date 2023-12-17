import axios from "axios";
import { ApiController } from "../apicontroller";
import { IOMDBApi } from "../interfaces/IOMDBApi";


export class OMDBApi extends ApiController implements IOMDBApi {
    
    async searchTitle(title: string): Promise<any> {
        var result = await axios.get(`${this.apiRoot}/api/omdb/${title}`);
        return result.data
    }

}