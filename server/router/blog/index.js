/* eslint-disable no-empty */
var path = require('path');
const Router = require('koa-router');
const blog = require('./blog.js');
const router = new Router();

const utils = require('../../utils/utils.js');

router.get('/getBlogList', async (ctx) => {
    let file_path = path.resolve(__dirname, '../../data/blog.json');

    let data;
    try {
        data = await utils.readFile({
            filename: file_path
        }).toString();
        !data && (data = []);
        data = JSON.parse(data);
    } catch (error) {
        data = [];
    }

    ctx.body = {
        code: 0,
        msg: 'success',
        data: data
    }
})

router.post('/addBlog', async (ctx) => {
    let body = ctx.request.body;
    
    // 写blog.json
    blog.saveBlog(body);
    ctx.body = {
        code: 0,
        msg: 'success',
        data: {}
    }
})

router.get('/getBlogDetail', async (ctx) => {
    let {id} = ctx.request.query;
    if (!id) {
        ctx.body = {
            code: 0,
            msg: '',
            data: {
                content: 'id不存在'
            }
        }
        return;
    }


    let file_path = path.resolve(__dirname, `../../data/blogs/${id}.json`);
    let data = {};
    try {
        data = await utils.readFile({
            filename: file_path
        }).toString();
        data = JSON.parse(data);
    } catch (error) {}

    ctx.body = {
        code: 0,
        msg: '',
        data: data
    };

});

module.exports = router.routes();