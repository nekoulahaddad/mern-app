const express = require("express");
const router = express.Router();
const Item = require('../models/Item');
const auth = require('../middleware/auth')

router.get('/',auth,(req,res) => {
Item.find()
.sort({ date : -1})
.then(items => res.json(items))

});

router.post('/',auth,(req,res) => {

   const {name,photo,price} = req.body;
	const newItem = new Item({
	name,
	price
	});
	newItem.save().then(item => res.json(item));
});


router.delete('/:id',auth,(req,res) => {
Item.findById(req.params.id)
.then(item => item.remove().then(() => res.json({success:true})))
.catch(err => res.status(404).json({success:false}))
});

router.put('/:id',(req,res) => {
	const {comment} = req.body;
	Item.findByIdAndUpdate({_id:req.params.id},{$set:{"comment":comment}})
	.then(() => Item.find()
		.then(item=>res.json(item))
		.catch(err=>err.status(500)))
    .catch(err => res.json(err))
});




module.exports = router;