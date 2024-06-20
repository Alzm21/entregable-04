const express = require('express');
const routerUser = require('./router.user');
const routerPost = require('./router.post');
const router = express.Router();

router.use('/users', routerUser)
router.use('/posts', routerPost)


module.exports = router;