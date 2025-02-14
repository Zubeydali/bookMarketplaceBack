// import  model from "mongoose"
import {BookModel} from "../models/BookModel.js"

export const ProductController ={

    getAll: async (req, res) => {
        let products = await BookModel.find()
        res.send(products)
    },
    getCategoryBooks:async()=>{
const id=req.params.id
const books=await BookModel.find({categoryId:id})
res.send(books)
    },

    getById: async (req, res) => {
        let id = req.params.id
        let myproducts = await BookModel.findById(id)
        res.send(
            {
                message:"success",
                data:myproducts
            }
        )
    },
    DeleteProduct: async (req, res) => {
        let id = req.params.id
        await BookModel.findByIdAndDelete(id)
    
        res.send({
            message:"sucsess"
        })
    },
    PostProduct: async (req, res) => {
        let newProduct = new BookModel(req.body)
        await newProduct.save()
        res.send({
            message:"sucsses",
        data:req.body})
    },
    UpdateProduct: async (req, res) => {
        let id = req.params.id
        let updateProduct = req.body
        let updatedProduct=await BookModel.findByIdAndUpdate({ _id: id }, updateProduct,{new:true})
        res.send(updatedProduct)
    }
}

