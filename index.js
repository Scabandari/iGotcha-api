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

const User = require('./models/User');
const Session = require('./models/Session');
const Comment = require('./models/Comment');
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
app.use(express.json({ extended: false }));
app.use(cors());
// app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
  res.send('world');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening on port 5000');
});

// sudo netstat -lpn |grep :'5000'
// kill -9 1192
