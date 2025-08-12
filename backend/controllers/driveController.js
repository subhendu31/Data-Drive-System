const DriveItem = require('../models/DriveItem');
const path = require('path');

exports.createFolder = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const folder = new DriveItem({
      name,
      type: 'folder',
      parent: parent || null,
      owner: req.user.id
    });
    await folder.save();
    res.status(201).json(folder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    const { parent } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;
    const file = new DriveItem({
      name: req.file.originalname,
      type: 'file',
      parent: parent || null,
      owner: req.user.id,
      fileUrl
    });
    await file.save();
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const { parent } = req.query;
    const items = await DriveItem.find({
      owner: req.user.id,
      parent: parent || null
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await DriveItem.deleteOne({ _id: id, owner: req.user.id });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.renameItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const item = await DriveItem.findOneAndUpdate(
      { _id: id, owner: req.user.id },
      { name },
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
