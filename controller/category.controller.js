import query from "../services/category.service.js"

export const getAllcategories = async (req, res)=>{
    try {
        const categories = await query.getAllcategories
        res.status(200).send("ok")
    } catch (err) {
        console.log("error")
    }
}