const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sample1 = Schema({
    name: {
      name: String,
      description: String
    }
  });
  
  
module.exports = mongoose.model('projects', sample1,'projects')
