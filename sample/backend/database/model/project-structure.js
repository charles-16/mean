const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*let sample = Schema({
    name: {
      first1: String,
      last1: String
    }
  });*/
  let sample = Schema({}, { strict: false });
  
module.exports = mongoose.model('projects', sample,'projects')
