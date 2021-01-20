const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productsAPIController = require('../../controllers/api/productsController');
// const authenticationMiddleware = require('../../middleware/api/authentication');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage });

router.get('/', productsAPIController.root);
// router.post('/add/favorite',productsAPIController.favoriteAdd);
// router.post('/delete/favorite',productsAPIController.favoriteRemove);
// router.post('/shop',productsAPIController.orders);
// router.post('/shop/confirm',productsAPIController.confirm);
// router.get('/:id', productsAPIController.find);

module.exports = router;