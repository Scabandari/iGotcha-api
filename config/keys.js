const mongoURI =
  process.env.MONGO_URI ||
  'mongodb://igotcha:pass1234@ds131320.mlab.com:31320/igotcha';

module.exports = {
  mongoURI,
  jwtSecret: 'secret'
};
