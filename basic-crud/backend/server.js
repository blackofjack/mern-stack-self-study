import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/connection.js"
import employeeRoutes from "./routes/EmployeeRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/employees", employeeRoutes);

//start the Express Server 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});