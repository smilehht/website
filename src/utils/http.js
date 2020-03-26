import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
    async post(url, params) {
        if (url.indexOf('api/') == -1) {
            url = 'api' + (url[0] == '/' ? '' : '/') + url;
        }
        
        let {data = {}} = await axios({
            url: url,
            method: 'post',
            data: params
        })
        return data;
    },
    async get(url, params) {
        if (url.indexOf('api/') == -1) {
            url = 'api' + (url[0] == '/' ? '' : '/') + url;
        }
        let {data = {}} = await axios.get(url, {params: params});
        return data;
    }
}
