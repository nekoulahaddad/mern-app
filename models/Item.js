const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const ItemsSchema = new Schema({
name : {
	type : String,
	required : true
},
photo : {
	type : String
},
date : {
	type : Date,
	default : Date.now
},
price : {
	type : Number
},
comment : {
	type:String
}


});

module.exports = Item = mongoose.model("Item",ItemsSchema)

