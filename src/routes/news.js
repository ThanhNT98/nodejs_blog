const express = require('express')
const router = express.Router()
const newsController=require('./../controllers/newsController')

//sắp xếp theo thứ tự route detail đến chung nhất
router.use('/:slug', newsController.newsDetail)
router.use('/',newsController.index);

module.exports=router;