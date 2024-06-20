const { getAll, create, getOne, remove, update } = require('../controllers/post.controller');
const express = require('express');
const { verifyJwt } = require('../utils/verify.JWT');

const routerPost = express.Router();

routerPost.route('/')
    .get(getAll) 
    .post(verifyJwt, create);

routerPost.route('/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerPost;