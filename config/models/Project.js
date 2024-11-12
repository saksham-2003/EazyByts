const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  githubLink: String,
});

module.exports = mongoose.model('Project', ProjectSchema);