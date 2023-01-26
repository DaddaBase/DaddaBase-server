const router = require("express").Router();
 
const mongoose = require('mongoose');
 
const Resource = require('../models/Resource.model');
const User = require('../models/User.model');
 
//  POST /api/resources  -  Creates a new resource
router.post('/resources', (req, res, next) => {
  const { title, description, imageUrl, videoUrl, userId } = req.body;

  Resource.create({ title, description,  imageUrl, videoUrl, user: userId })
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

// GET /api/resources -  Retrieves all of the resources
router.get('/resources', (req, res, next) => {
  Resource.find()
    .populate('user')
    .then(allResources => res.json(allResources))
    .catch(err => {
      console.log("error getting resources", err);
      res.status(500).json(err)
  });
});

//  GET /api/resources/:resourceId -  Retrieves a specific resource by id
router.get('/resources/:resourceId', (req, res, next) => {
  const { resourceId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(resourceId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Resource.findById(resourceId)
    .populate('user')
    .then(resource => res.status(200).json(resource))
    .catch(error => res.json(error));
});
 
 
// PUT  /api/resources/:resourceId  -  Updates a specific resource by id
router.put('/resources/:resourceId', (req, res, next) => {
  const { resourceId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(resourceId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Resource.findByIdAndUpdate(resourceId, req.body, { new: true })
    .then((updatedresource) => res.json(updatedresource))
    .catch(error => res.json(error));
});
 
 
// DELETE  /api/resources/:resourceId  -  Deletes a specific resource by id
router.delete('/resources/:resourceId', (req, res, next) => {
  const { resourceId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(resourceId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Resource.findByIdAndRemove(resourceId)
    .then(() => res.json({ message: `resource with ${resourceId} is removed successfully.` }))
    .catch(error => res.json(error));
});
 
module.exports = router;