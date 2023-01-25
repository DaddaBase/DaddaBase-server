const router = require("express").Router();

// const mongoose = require('mongoose');

const Post = require('../models/Post.model');
const User = require('../models/User.model');

//  POST /api/posts  -  Creates a new post
router.post('/posts', (req, res, next) => {
    const { title, description, userId } = req.body;

    Post.create({ title, description, user: userId })
        .then(newPost => {
            return User.findByIdAndUpdate(userId, { $push: { posts: newPost._id } })
        })
        .then(response => {
            console.log("create post success");
            res.json(response)
        })
        .catch(err => {
            console.log("error crating new resource", err);
            res.status(500).json(err)
        });
});

// GET /api/posts -  Retrieves all of the posts
router.get('/posts', (req, res, next) => {
    Post.find()
        .populate('user')
        .then(allPosts => res.json(allPosts))
        .catch(err => {
            console.log("error getting posts", err);
            res.status(500).json(err)
        });
});

module.exports = router;