const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router/index.js')

const app = new Koa();

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

app.listen(3333, () => {
  console.log('This server is running')
  console.log('port is 3333')
})