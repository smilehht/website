
const Router = require('koa-router');
const router = new Router({
    // prefix: '/api'
});

router.use('/blog', require('./blog/index.js'));

module.exports = router;