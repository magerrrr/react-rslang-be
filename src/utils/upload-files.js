const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'files/');
  },
  filename(req, file, cb) {
    const currentDate = moment().format('YYYY-MM-DD--HH-mm-ss');
    cb(null, `${currentDate}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    return cb(null, true);
  }
  return cb(null, false);
};

const limits = {
  fileSize: 4 * 1024 * 1024
};

module.exports = multer({
  storage,
  fileFilter,
  limits
});
