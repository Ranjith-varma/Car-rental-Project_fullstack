import express from 'express';
import "dotenv/config";
import cors from "cors";
import connectDB from './configs/db.js';
import UserRouter from './routes/UserRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

// initialize Express App
const app = express();

// connect database
await connectDB()

// Middleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is running"))
app.use('/api/user',UserRouter)
app.use('/api/owner',ownerRouter)
app.use('/api/bookings',bookingRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))