const router = require("express").Router();
 
//const mongoose = require('mongoose');
 
const Product = require('../models/Product.model');
 
//  POST /api/resources  -  Creates a new resource
router.get('/products', (req, res, next) => {
  Product.find()
  .then(allProducts=> res.json(allProducts))
  .catch(err => {
      console.log("error getting products", err);
      res.status(500).json(err)
  });
})

router.get('/products/:productId', (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then(oneProduct => {
      console.log(`productId:${productId}`)
    console.log(`oneProduct:${oneProduct}`)
      res.json(oneProduct)
    })
  .catch(err => {
      console.log("error getting products", err);
      res.status(500).json(err)
  });
})

router.post('/products', (req, res, next) => {
  const {name, description} = req.body;

  Product.create({ name, description, category, count, price, rating, reviewCount, sales, attributes, images, reviews })
    .then(newProduct => {
      console.log('new product created')
    })
    .catch(err => {
        console.log("error crating new resource", err);
        res.status(500).json(err)
    });
});

 
module.exports = router;