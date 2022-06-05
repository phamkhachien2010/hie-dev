import axios from 'axios'
import { DOMAIN, TOKEN } from '../util/setting/config'

export class baseService {

    put = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers:{'token': localStorage.getItem(TOKEN)}
        })
    };

    post = (url, model)=>{
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers:{'token': localStorage.getItem(TOKEN)}
        })
    };

    get =(url)=>{
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers:{'token': localStorage.getItem(TOKEN)}
        })
    };

    delete=(url, model)=>{
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: model,
            headers:{'token': localStorage.getItem(TOKEN)}
        })
    }
}