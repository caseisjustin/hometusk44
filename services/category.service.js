import category from '../models/category.model.js';

const getAllCategories = async ()=>{
    try {
        const category = await category.find()
        if(category)
            return category
        else
            return false
    } catch (err) {
        console.log("error")
    }
}

const createCategories = async (name, description) =>{
    try {
        
    } catch (err) {
        
    }
}
export default {
    getAllCategories
}