import mongoose from 'mongoose'

const ShopsSchema = new mongoose.Schema({


	id: {
		type: String,
	},
	name: {
		type: String,
	},
	type: {
		type: String,
	}


})

export default mongoose.model('Shops', ShopsSchema, "Shops")