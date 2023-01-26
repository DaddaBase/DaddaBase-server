const router = require("express").Router();
 
const mongoose = require('mongoose');
 
const User = require('../models/User.model');

//  GET /api/users/:userId -  Retrieves a specific user by id
router.get('/users/:userId', (req, res, next) => {
  const { userId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findById(userId)
    .then(user => res.status(200).json(user))
    .catch(error => res.json(error));
});
 
 
// PUT  /api/users/:userId  -  Updates a specific user by id
router.put('/users/:userId', (req, res, next) => {
  const { userId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndUpdate(userId, req.body, { new: true })
    .then((updateduser) => res.json(updateduser))
    .catch(error => res.json(error));
});
 
 
// DELETE  /api/users/:userId  -  Deletes a specific user by id
router.delete('/users/:userId', (req, res, next) => {
  const { userId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndRemove(userId)
    .then(() => res.json({ message: `user with ${userId} is removed successfully.` }))
    .catch(error => res.json(error));
});
 
module.exports = router;