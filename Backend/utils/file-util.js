exports.fileFilter = (req, file, cb) => {
  const isValidFile =
    file.mimetype === "image/jpeg" || file.mimetype === "image/png";
  cb(null, isValidFile);
};
