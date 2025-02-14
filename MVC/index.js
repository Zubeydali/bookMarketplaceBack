import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import{ route} from "./routers/ProductRouter.js"
import {CategoryRouter} from "./routers/CategoryRouter.js"
import mongoose from 'mongoose'
import { config } from 'dotenv';
const app=express()

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
import './config/config.js'
app.use("/products",route)
app.use("/categories",CategoryRouter)



  

  app.listen(3000, () => {
    console.log(`3000 portunda dinlenilir`)
  })
