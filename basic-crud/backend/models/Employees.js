import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name:{
        type: String,
        required: true,
    },
        position: {
            type: String,
            required: true,
        },

        level: {
            type: String,
            required: true,
        },
    },
    {
        Timestamp: true,
    }
);

const Employee = mongoose.model(
    "Employee",
    employeeScheme
);

export default Employee;