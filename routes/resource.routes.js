const router = require("express").Router();
 
// const mongoose = require('mongoose');
 
const Resource = require('../models/Resource.model');
const User = require('../models/User.model');
 
//  POST /api/resources  -  Creates a new resource
router.post('/resources', (req, res, next) => {
  const { title, description, url, userId } = req.body;

  Resource.create({ title, description, url, user: userId })
    .then(newResource => {
      return User.findByIdAndUpdate(userId, { $push: { resources: newResource._id }})
    })
    .then(response => {
        console.log("create resource success");
        res.json(response)})
    .catch(err => {
        console.log("error crating new resource", err);
        res.status(500).json(err)
    });
});
 
module.exports = router;