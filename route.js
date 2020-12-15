const express = require('express');
const router =express.Router();
const data=require('./model');

router.post('/data',(req,res)=>{

	 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);


	const dataUP= new data({
		name:req.body.name,
		image:req.body.image,
		price:req.body.price,
	})
	dataUP.save()
	.then(data=>{
		response.json(data);
	})
	.catch(err=>{
		response.json(err);
	});
})
//================================================
router.get('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	data.find()
	.then(dataget=>{
		console.log(dataget);
		res.json(dataget);
	})
	.catch(err=>res.status(400).json(err));
});
module.exports = router;