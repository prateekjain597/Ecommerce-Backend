const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SP = new Schema({
  Id:{type:Number,required:true,unique:true},
  Name: { type: String, required: true },
  Description: { type: String, required: true  },
  Image:{ type: String, required: true }

}, {
  timestamps: true
})

module.exports = mongoose.model('sp', SP);