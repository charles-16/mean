let express = require('express'),
  mongoose = require('mongoose'),
    cors = require('cors'),
 bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');
  request = require('request'),
  nodemailer=require('nodemailer'),
  smtpTransport = require('nodemailer-smtp-transport');;
  const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

 
 
//const sampleRoute = require('./routes/sample.routes')
//app.use('/api', sampleRoute)
const app = express();
//app.use(express.static('public'));

app.use(cors());
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
})); */
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
/*app.use(cors());

// RESTful API root
app.use('/api', sampleRoute)
app.get('/api', (req, res) => {
    res.send('invaild endpoint');
  });
*/
let sample = require('./database/model/project-structure');
app.get('/',(req,res) => {
    console.log('get method')
    sample.find((error, data) => {
      if (error) {
        return next(error)
      } else {
     res.json(data)
      }
    })
  })
//get all project. need for related project page
  app.get('/getproject',(req,res) => {
    console.log('get method')
    sample.find({},'name keywords description',(error, data) => {
      if (error) {
        return next(error)
      } else {
     res.json(data)
      }
    })
  })

  

app.post('/create', function(req, res, next) {

  //console.log(req.body)
  querybody = new sample(req.body);
  //console.log(querybody);
  //console.log(request.body1);
  querybody.save( function(error, data) {
      if (error) return next(error);
      res.json(data);
      console.log('success')
  })
})
  app.post('/create1',(req,res) => {
    sample.find((error, data) => {
      if (error) {
        return next(error)
      } else {
     res.json(data)
      }
    })
  })

  app.get('/fetchdata/:id',(req,res) => {
    console.log("12121")
    //console.log(req)
    id = req.params.id
    console.log(id);
    console.log(2)
  sample.findOne({_id:id}, function(err, data){
    if (err){
      return next(err);
        //return done(err, null);
    }else{
      res.json(data)
    }

});
});

  /*app.get('/delete',(req, res, next) => {
    sample.findByIdAndRemove("5ec9d642d3bea659e4260174", (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    })
  })*/
 /* post('/', function(req, res, next) {
    Book.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });*/

app.get('/aaa', (req, res) => {
    res.send('Hello World, from express');
});

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Connected to port ' + port)
  })

