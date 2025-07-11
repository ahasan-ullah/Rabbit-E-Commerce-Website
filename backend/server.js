const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const userRoutes=require('./routes/userRoutes');

const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT=process.env.PORT||3000;
// connect to MongoDB
connectDB();

app.get('/',(req,res)=>{
  res.send('Welcome to the rabbit api!');
})

// api
app.use('/api/users',userRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})
