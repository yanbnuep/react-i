const router = require('koa-router')()

router.prefix('/updateNews')

router.get('/',async (ctx,next) =>{
	await ctx.render('./news/view_uploadNews',{
		title: 'first router'
	})
})

router.post('/newsUpload',async (ctx,next) => {
	
})

module.exports = router