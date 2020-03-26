var path = require('path');
const Router = require('koa-router');
const blog = require('./blog.js');
const router = new Router();

const utils = require('../../utils/utils.js');

router.get('/getBlog', async (ctx) => {
    console.log('getBlog');
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

module.exports = router.routes();