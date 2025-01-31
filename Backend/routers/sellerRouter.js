const express = require('express');
const multer = require('multer');
const fs = require("fs");
const { fileFilter } = require('../utils/file-util');
const sellerRouter = express.Router();

// Create uploads directory if it doesn't exist
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '-');
      cb(null, `${timestamp}-${sanitizedFilename}`);
    } catch (error) {
      cb(new Error('Error processing file name'));
    }
  },
});

// Configure multer upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  }
}).single('image');

// Wrap multer upload in error handling middleware
const handleUpload = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ 
        status: 'error',
        message: 'File upload error',
        error: err.message 
      });
    } else if (err) {
      return res.status(500).json({ 
        status: 'error',
        message: 'Server error during upload',
        error: err.message 
      });
    }
    next();
  });
};

const { getProfile, createProduct } = require('../controllers/sellerController');

// Routes
sellerRouter.get('/profile', getProfile);
sellerRouter.post('/addProduct', handleUpload, createProduct);

module.exports = sellerRouter;