import express from 'express'

import mongoose from 'mongoose'
import Shops from './models/Shops.js'
import ShopsItems from './models/shopsItems.js'
import Carts from './models/Carts.js'

import cors from 'cors'


mongoose.connect(
	'mongodb+srv://vladyslavmaistruk07:pWvK9IVGA9ak6HAb@cluster0.w3lona8.mongodb.net/Barbershop?retryWrites=true&w=majority').then(() => {
		console.log("bd ok")
	})


const app = express()
app.use(express.json())

app.use(cors({
	origin: "*"
}))



const PORT = process.env.PORT || 4444





app.get('/products', async (req, res) => {
	let products = await Product.find()
	res.send(JSON.stringify(products))
})


app.get('/shops', async (req, res) => {
	let shops = await Shops.find()
	res.send(JSON.stringify(shops))
})


app.get('/shopsItems', async (req, res) => {
	let shopsItems = await ShopsItems.find()
	res.send(JSON.stringify(shopsItems))
})



app.post('/pushCart', (req, res) => {
	let carts = new Carts(req.body)
	carts.save()
	console.log(req.body)
})


app.listen(PORT, (err) => {
	if (err) {
		console.log(err)
	}
	console.log('server ok')
})

