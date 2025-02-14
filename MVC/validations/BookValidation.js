// import Joi from 'joi';
// Joi.objectId = require('joi-objectid')(Joi)
import Joi from 'joi';
import joiObjectId from 'joi-objectid';

Joi.objectId = joiObjectId(Joi);


const bookValidationSchema=Joi.object({
    name:Joi.string().min(2).max(40).required(),
    price:Joi.number().min(1).max(400).required(),
    categoryId: Joi.objectId()
})

export default bookValidationSchema