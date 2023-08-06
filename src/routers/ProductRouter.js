import express from 'express'
import { getAllProduct, postProduct } from '../controllers/ProductController.js'

const ProductRouter = express.Router()

ProductRouter.post("/post-product",postProduct)
ProductRouter.get("/get-all-product", getAllProduct)

export default ProductRouter