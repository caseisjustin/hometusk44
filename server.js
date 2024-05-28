import app from "./app.js"
import connectDB from "./database/database.js";

connectDB()


app.listen(process.env.PORT, err=>{
    if(err){
        console.log("An errer occured")
    }
    else{
        console.log("Server running ....")
    }
})