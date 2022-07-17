const mongoose = require('mongoose');
const taskModel = new mongoose.Schema({}, {strict: false});
const Model = mongoose.model('tasks', taskModel);
module.exports = Model;
