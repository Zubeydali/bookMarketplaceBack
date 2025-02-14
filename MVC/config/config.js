import mongoose from 'mongoose'
import { connect } from 'mongoose';

mongoose.connect("mongodb+srv://zubeydaalizada:Zubeyda21@cluster0.dmo4w.mongodb.net/")
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })

