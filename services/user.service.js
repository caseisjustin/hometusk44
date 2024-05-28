import user from '../models/user.model.js';


const getSpecData = async (email, data) => {
    let userresult = await user.find({"email": email}, {[data]: 1})
    console.log(userresult)
    return userresult
}

const getAllusers = async () => {
    const users = await user.find()
    if(users)
        return users
    else
        return false
}

const getUserByEmail = async (email) => {
    const userresult = await user.find({email})
    if(userresult){
        return userresult
    }
    else{
        return false
    }
}
const addUser = async (email, password, role) => {
    const response =  await user({email, password, role})
    return response
}

const updateUser = async (email, password, role) => {
    const updater = {}
    updater.email = email ? email : await getSpecData(email, "email")
    updater.password = password ? password : await getSpecData(email, "password")
    updater.role = role ? role : await getSpecData(email, "role")
    console.log(updater)
    const response = await user.updateOne({email: email}, updater)
    return response
}

const deleteUser = async (email) => {
    await user.findOneAndDelete({email})
}
export default {
    getAllusers,
    addUser,
    getUserByEmail,
    updateUser,
    deleteUser
}
