import bookValidationSchema from '../validations/BookValidation.js'

const bookmiddleWare=(req,res,next)=>{
let result=bookValidationSchema.validate(req.body)
console.log(result.error.details[0].message)

if (result.error) {
    // Eğer doğrulama hatası varsa, hata mesajını döndürüyoruz
    return res.status(400).json({
      error: result.error.details[0].message
    });
  }
next();
}

export default bookmiddleWare