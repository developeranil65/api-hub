import dotenv from "dotenv";
import { app } from "./app.js";

// Loading env configurations
dotenv.config({
    path: './.env'
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
})
app.on("error", (error) => {
    console.log("Server Error", error);
    throw error;
})
