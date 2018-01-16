const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Registry = new Schema(
  {
    "proxy": String,
    "owner": String,
    "blockNumber": Number,
  });
mongoose.model('Registry', Registry);

module.exports = {
  mongoose
}
