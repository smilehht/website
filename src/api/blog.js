import api from '@/utils/http.js';

export function getBlog(params) {
    return api.get('/blog/getBlog', params);
}

export function addBlog(params) {
    return api.post('/blog/addBlog', params);
}