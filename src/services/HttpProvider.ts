import axios from "axios";

export class HttpProvider{

    get(url: string, params:any){
        return axios.get(url, params);
    }
    post(url: string, data: any){
        return axios.post(url, data);
    }
    put(url: string, data: any){
        return axios.put(url, data);
    }
    getWithParams(url: string, params: any){
        return axios.post(url, params);
    }
}