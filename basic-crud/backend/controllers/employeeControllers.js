import Employees from "../models/Employees.js";

export const getEmployees = async (req, res) => {
    try {
        const getEmployees = await Employees.find();
        res.status(200).json(employees);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};