 import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { products } from './constants/Constants.js';
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFoundRoute } from './middleware/errorHandler.js';
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

app.use('/api/products',productRoutes)
app.use(notFoundRoute);
app.use(errorHandler);