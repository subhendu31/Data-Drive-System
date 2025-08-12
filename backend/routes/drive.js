const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const driveController = require('../controllers/driveController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/folder', authenticate, driveController.createFolder);
router.post('/file', authenticate, upload.single('file'), driveController.uploadFile);
router.get('/items', authenticate, driveController.getItems);
router.delete('/:id', authenticate, driveController.deleteItem);
router.put('/:id', authenticate, driveController.renameItem);

module.exports = router;
