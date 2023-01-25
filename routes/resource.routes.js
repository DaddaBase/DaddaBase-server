const router = require("express").Router();
 
// const mongoose = require('mongoose');
 
const Resource = require('../models/Resource.model');
 
//  POST /api/resources  -  Creates a new resource
router.post('/resources', (req, res, next) => {
  const { title, description, url } = req.body;

  Resource.create({ title, description, url /*, user: {}*/ })
    .then(response => {
        console.log("create resource success");
        res.json(response)})
    .catch(err => {
        console.log("error crating new resource", err);
        res.status(500).json(err)
    });
});
 
module.exports = router;