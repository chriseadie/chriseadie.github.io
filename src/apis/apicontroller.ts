import axios from "axios"

export class ApiController {

    constructor(){
        axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'latest';
    }
    public apiRoot:string = 'https://a306-78-149-128-70.ngrok-free.app'
}