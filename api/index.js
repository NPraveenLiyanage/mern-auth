import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();

//MongoDb connection
mongoose.connect(process.env.MONGOdb).then(() => {
    console.log('Connected to MongoDb');
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server listing on port 3000!');
});

app.use("/api/user", userRoutes);
  