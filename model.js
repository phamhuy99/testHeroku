const mongoose=require('mongoose');

const data= new mongoose.Schema({
	name:{
		type:String,
		require:true
	},
	image:{
		type:String,
		require:true
	},
	price:{
		type:Number,
		require:true
	}
})

module.exports=mongoose.model('dataphone',data);