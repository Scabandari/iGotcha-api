const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
//console.log(`keys: ${JSON.stringify(keys)}`);
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
  //useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

const app = express();
app.use(express.json({ extended: false }));
app.use(cors());
// app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('world');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening on port 5000');
});

// sudo netstat -lpn |grep :'5000'
// kill -9 1192
