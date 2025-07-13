const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name : {
    type:String,
    required : true,
  },
  description:{
    type:String,
    require:true,
  },
  image:{
    type:String,
    required:true,
  }
},
{Timestamp:true}
);

module.exports = mongoose.model('Project',projectSchema);