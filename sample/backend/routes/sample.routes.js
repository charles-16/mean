const express = require('express');
const app = express();
const sampleRoute =app.route();

// Student model
let sample = require('../database/model/project-structure');

sampleRoute.route('/delete').delete((req,res) => {
    sample.findByIdAndRemove("5ec9d642d3bea659e4260174", (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      })
    })

  module.exports = sampleRoute;