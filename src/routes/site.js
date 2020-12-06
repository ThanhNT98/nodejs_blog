const express = require('express')
const router = express.Router()
const siteController=require('./../controllers/siteController')

//sắp xếp theo thứ tự route detail đến chung nhất
router.use('/:slug', siteController.search)
router.use('/',siteController.home);

module.exports=router;