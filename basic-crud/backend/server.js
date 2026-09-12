import express from "express";
import cors from "cors"
import records from "./routes/record.js"

const PORT = proccess.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

//start the Express Server 

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});