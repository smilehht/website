
const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});

router.use('/report', require('./report/index.js'));
router.use('/project', require('./project/index.js'));
router.use('/code', require('./code/index.js'));
router.use('/dashboard', require('./dashboard/index.js'));

module.exports = router;