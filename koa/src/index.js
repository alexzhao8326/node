const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
app.use(require('koa-static')(__dirname+'/'))
// app.use((ctx,next)=>{
// 	ctx.body = [
// 		{
// 			name:'Tom',
// 			age:27
// 		}
// 	]
// })
router.get('/string',async (ctx,next)=>{
	ctx.body = 'string'
})
router.get('/json',async (ctx,next)=>{
	ctx.body = [
		{
			name:'Tom',
			age:29
		}
	]
})
app.use(router.routes())
app.listen(3000)