import { getUserByEmail } from "../controller/users.controller.js"
import { userValidSchema } from "../services/validation.service.js"
export const adminsCheck = async (req, res, next) => {
    try {
        const {error} = userValidSchema.validate(req.body[0])
        if(error){
            res.status(400).send("Invalid data", error.message)
        }
        else{
            const {email, password, role} = req.body[0]
            const user = await getUserByEmail(email, password, role)
            if(user){
                if(role === 'superadmin' || role === 'admin'){
                    next()
                }
                else{
                    res.send("You don't have priveliges")
                }
            }
        }
    } catch (err) {
        res.send("Something went wrong")
    }
}

export const userDeleteCheck = async (req, res, next) => {
    try {
        const {error} = userValidSchema.validate(req.body[0])
        if(error){
            res.status(400).send("Invalid data", error.message)
        }
        else{
            const {email, password, role} = req.body[0]
            const user = await getUserByEmail(email, password, role)
            if(user){
                if(role === 'superadmin'){
                    next()
                }
                else{
                    res.send("You don't have priveliges to delete user")
                }
            }
        }
    } catch (err) {
        res.send("Something went wrong")
    }
}