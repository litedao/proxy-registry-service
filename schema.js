const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Directory = new Schema(
  {
    "proxy": String,
    "owner": String,
    "blockNumber": Number,
  });
mongoose.model('Directory', Directory);

module.exports = {
  mongoose
}
