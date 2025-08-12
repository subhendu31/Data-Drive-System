const mongoose = require('mongoose');

const DriveItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['file', 'folder'], required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'DriveItem', default: null },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('DriveItem', DriveItemSchema);
