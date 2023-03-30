const express = require('express')
const { getBlogs, postBlog } = require('../controllers/blogController')

const blogRouter = express.Router()

blogRouter.get('/', getBlogs)

blogRouter.post('/', postBlog)

module.exports = blogRouter