import express from "express"
import {CategoryController }from "../controllers/CategoryController.js"
import Bookmiddleware from '../middleware/Bookmiddleware.js'
export const CategoryRouter=express.Router()

// export const route=express.Router()

CategoryRouter.get("/",CategoryController.getAll)
CategoryRouter.get("/:id",CategoryController.getById)
CategoryRouter.delete("/:id",CategoryController.DeleteCategory)
CategoryRouter.post("/",CategoryController.PostCategory)
CategoryRouter.put("/:id",CategoryController.UpdateCategory)

