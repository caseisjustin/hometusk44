import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 10,
        maxlength: 50
    },
    description: {
        type: String,
        required: true
    }
})

const category = mongoose.model("category", categorySchema);
export default category;