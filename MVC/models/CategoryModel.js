// import { string } from "joi"
import { Schema, model } from "mongoose"
import Joi from "joi";  


const categorySchema = new Schema({
    category: {
        type: String,   // 'type' küçük harflerle yazılmalı
        required: true // category alanının zorunlu olduğu belirtildi
       
      }

})
const CategoryModel = model("category", categorySchema)
export default CategoryModel;