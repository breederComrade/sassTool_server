// 引入依赖


const config = require('./src/config/config');
// const db = require('./src/db/index');
const router = require('koa-router')();

const Koa = require('koa');
const app = new Koa();

router.get('/', (ctx, next) => {
	ctx.body = '首页';
})

router.get('/user', (ctx, next) => {
	ctx.body = 'yonghu';
})
router.get('/user/:id', (ctx, next) => {
	ctx.body = 'id';
})

router.get('user', '/user/:f', (ctx, next) => {

})


app
	.use(router.routes())
	.use(router.allowedMethods());


// app.use( async function (ctx) {
//   ctx.body = {result:{
// 	   fuck:"fuck"
//   }};
// });




app.listen(config.prot, "172.16.34.183")