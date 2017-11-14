const router = require('koa-router')()


router.prefix('/uploadNews')



router.get('/', async(ctx, next) => {
    await ctx.render('./news/view_uploadNews', {
        title: 'first router'
    })
})


router.get('/newsUpload', async(ctx, next) => {

})

module.exports = router