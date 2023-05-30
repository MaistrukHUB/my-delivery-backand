import mongoose from 'mongoose'

const CartsSchema = new mongoose.Schema({}, { strict: false })

export default mongoose.model('Carts', CartsSchema, "Carts")