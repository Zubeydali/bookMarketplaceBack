// import { ref } from "joi"
import Joi from 'joi';
// const { ref } = Joi;
import mongoose, { Schema, model } from "mongoose"


const productSchema = new Schema({
  name:{ 
    type:String
  },
  price: {
    type:Number
  },

  Image:{
    type:String
  },
  categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category"
  }



})
export let BookModel = model("products", productSchema)


