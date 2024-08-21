 import express from 'express';
import { products } from './src/constants/Constants.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config()
 const port = process.env.PORT || 5001;
 const app = express();
 connectDB();

 app.get('/',(req, res) =>{
    res.send('App is running');
 })

 app.listen(port, () =>{
    console.log('app is running on port ',port);
 })

 app.get('/api/products',(req, res) =>{  
    res.json(products);
 })

 app.get('/api/products/:id',(req, res) =>{  
   const product = products.find((product) => {
      console.log(product._id,"product._id",req.params.id);
      
      return product._id == req.params.id})
   res.send(product);
})