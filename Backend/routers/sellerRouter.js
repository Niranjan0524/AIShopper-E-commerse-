const express = require('express');

//this multer for storing the images in the server side. this we are doing here because we need it for only particular route
const multer=require('multer');
const fs = require("fs");
const {fileFilter}= require('../utils/file-util');
const sellerRouter=express.Router();

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});


const {getProfile}=require('../controllers/sellerController');
const {createProduct}=require('../controllers/sellerController');

sellerRouter.get('/profile',getProfile);

sellerRouter.post('/addProduct',multer({storage:storage}).single('image'),createProduct);

module.exports=sellerRouter;