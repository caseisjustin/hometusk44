import query from "../services/user.service.js"
import {userValidSchema} from "../services/validation.service.js"

export const getAllusers = async (req, res) => {
    try {
        const users = await query.getAllusers()
        res.status(200).send(users)
    } catch (err) {
        res.send("An error occured")
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const {email} = req.query
        let result = await query.getUserByEmail(email)
        if(!result){
            res.send("User not found!")
        }
        else{
            result = result[0]
            res.status(200).send(result)
        }
    } catch (err) {
        res.send("An error occured")
    }
}

export const createUser = async (req, res) => {
    try {
        const { role, email, password } = req.body[1]
        if (!role || !email || !password){
            res.status(400).send("bad request!")
        } else {
            const { error } = userValidSchema.validate(req.body[1])
            if (error){
                res.status(406);
                return res.json(
                    errorFunction(true, `Error in User Data : ${error.mes}`)
                );
            }
            else {
                const response = await query.addUser(role, email, password,)
                response.save()
                res.send("added")
            }
        }
    }
    catch(err) {
        res.status(500).send(err)
    }
}

export const updateUser = async (req, res) => {
    try {
        const {role, email, password} = req.body[1]
        let response = query.updateUser(role, email, password,)
        console.log(response)
        res.send("Updated!")
    } catch (err) {
        res.send("An error occured")
    }
}

export const deleteUser = async (req, res) => {
    try {
        query.deleteUser(req.body[1].email)
        res.send("user deleted")
    } catch (err) {
        res.send("An erroc occured", err.message)
    }
}