const router = require("express").Router();
 
// const mongoose = require('mongoose');
 
const Post = require('../models/Post.model');
 
//  POST /api/resources  -  Creates a new resource
router.post('/posts', (req, res, next) => {
  const { title, description } = req.body;

  Post.create({ title, description })
    .then(response => {
        console.log("create post success");
        res.json(response)})
    .catch(err => {
        console.log("error crating new resource", err);
        res.status(500).json(err)
    });
});
 
module.exports = router;