const router = require('koa-router')()

router.prefix('/updateNews')

router.get('/',function(ctx,next){
	await ctx.render('/news/newsUpload/udateNews',{
		title: 'first router'
	})
})