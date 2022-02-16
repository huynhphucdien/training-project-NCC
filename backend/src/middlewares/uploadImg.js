const multer = require('multer');
const path = require('path');

// Set Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname));
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, file.fieldname + '-' + Date.now() + '-' + fileName);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/jfif'
    ) {
      cb(null, true);
    } else {
      return cb(new Error('Image not exist'));
    }
  },
  limits: { fieldSize: 6 * 1024 * 1024 },
});
module.exports = { upload };
