import mongoose from 'mongoose'

const ShopsItemsSchema = new mongoose.Schema({


	id: {
		type: String,
	},
	name: {
		type: String,
	},
	type: {
		type: String,
	},
	price: {
		type: Number,
	}


})

export default mongoose.model('shopsItems', ShopsItemsSchema, "shopsItems")