// import  model from "mongoose"
import { BookModel } from "../models/BookModel.js"
import CategoryModel from "../models/CategoryModel.js"

export const CategoryController ={

    getAll: async (req, res) => {
        let category = await CategoryModel.find()
        res.send(category)
    },

    getById: async (req, res) => {
        let id = req.params.id
        let mycategory = await CategoryModel.findById(id)
        res.send(
            {
                message:"success",
                data:mycategory
            }
        )
    },
    DeleteCategory: async (req, res) => {
        let {id} = req.params.id
        await CategoryModel.findByIdAndDelete(id)
        await BookModel.deleteMany({categoryId:id})
        res.send({
            message:"sucsess"
        })
    },
    PostCategory: async (req, res) => {
        let newCategory = new CategoryModel(req.body)
        await newCategory.save()
        res.send({
            message:"sucsses",
        data:req.body})
    },
    UpdateCategory: async (req, res) => {
        let id = req.params.id
        let  UpdateCategory = req.body
        let  UpdatedCategory=await CategoryModel.findByIdAndUpdate({ _id: id },  UpdateCategory,{new:true})
        res.send( UpdatedCategory)
    }
}

