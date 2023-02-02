const router = require("express").Router();
const mongoose = require('mongoose');
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
            console.log("error crating new post", err);
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

//  GET /api/posts/:postId -  Retrieves a specific post by id
router.get('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Post.findById(postId)
        .populate('user')
        .populate('comment')
        .then(post => res.status(200).json(post))
        .catch(error => res.json(error));
});

//  POST /api/posts/:postId -  Create a new comment to post by id
router.post('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;
    const { username, profileImage, content, replyTime } = req.body;

    // Post.create({ username, profileImage, content, replyTime })
    Post.findByIdAndUpdate(postId, { $push: { comment: {username: username, profileImage: profileImage, content: content, replyTime: replyTime}}})
        // .then( newPost => {
        //     return Post.findByIdAndUpdate(postId, { $push: comment}, {new: true})
        // })
        .then(response => {
            console.log("create comment success");
            res.json(response)})
        .catch(err => {
            console.log("error crating new comment", err);
            res.status(500).json(err)
        });
});

// DELETE  /api/post/:postId  -  Deletes a specific post by id
router.delete('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Post.findByIdAndRemove(postId)
      .then(() => res.json({ message: `post with ${postId} is removed successfully.` }))
      .catch(error => res.json(error));
  });

module.exports = router;