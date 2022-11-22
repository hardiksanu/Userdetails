// collection name - MenRanking

const mongoose = require("mongoose");

//Schema for Manranking is defined. In schema product_name, price and category represent a key in the collection. Each column has a data type, In this schema data type for all columns is  String. But Number, Date, Boolean or ObjectID can also be used.

//Finally Manranking is exported using module.exports object. In other files this model is included via require method.

const menSchema = new mongoose.Schema({
          ranking:{ type: Number, required: true, unique: true},
          name:{ type: String, required: true, trim: true},
          dob:{ type: String, required: true, trim: true},
          country:{ type: String, required: true, trim: true},
          score:{ type: Number, required: true, trim: true},
          event:{ type: String, default:"100m"},
});
 
// we are creating a new collection
const MensRanking = mongoose.model("menranking", menSchema);
module.exports = MensRanking; 



