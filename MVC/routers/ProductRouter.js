import express from "express"
import {ProductController }from "../controllers/ProductController.js"
import Bookmiddleware from '../middleware/Bookmiddleware.js'
// import ProductRouter from '../routers/ProductRouter'

export const route=express.Router()

route.get("/",ProductController.getAll)
route.get("/:id",ProductController.getById)
route.get("/category/:id",ProductController.getCategoryBooks)
route.delete("/:id",ProductController.DeleteProduct)
route.post("/",Bookmiddleware,ProductController.PostProduct)
route.put("/:id",ProductController.UpdateProduct)

