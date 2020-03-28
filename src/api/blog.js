import api from '@/utils/http.js';

export function getBlogList(params) {
    return api.get('/blog/getBlogList', params);
}

export function addBlog(params) {
    return api.post('/blog/addBlog', params);
}

export function getBLogDetail(params) {
    return api.get('/blog/getBLogDetail', params);
}