const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const createUser = async (data) => {
    const response = {};
    try {
        const userObj = {
            name: data.name,
            email: data.email,
            userType: data.userType,
            password: data.password,
            userStatus: data.userStatus,
        }
        response.user = await User.create(userObj);
        return response;
    }catch(err){
        console.log("Error: ", err);
        response.error = err.message;
        return response;
    }
}

const verifyUser = async (data) => {
    const response = {};
    try {
        const userData = await User.findOne({ email: data.email });
        //email not found
        if (userData == null) {
            response.error = "Invalid Email";
        }
        else {//email found
            const result = bcrypt.compareSync(data.password, userData.password);//true
            if (result) {
                response.success = true;
            }else {
                response.error = "Invalid Password";
            }
        }
        return response;
    }catch(err){
        console.log("Error: ", err);
        response.error = err.message;
        return response;
    }
}
const getUserByUserId= async (data) => {
    try {
        let userInfo = await User.findOne({_id: data.userId });
        return userInfo;
    }
    catch (err) {
        console.log(err);
        return error.message;
    }
}
const getAllUsers = async (data) => {
    try {
        let userInfo = await User.find();
        return usersInfo;
    }
    catch (err) {
        console.log(err);
        return error.message;
    }
}

const getUserByEmail = async (data) => {
    try {
        let userInfo = await User.findOne({ email: data.email });
        return userInfo;
    }
    catch (err) {
        console.log(err);
        return error.message;
    }
}
const updateUserStatus = async (data) => {
    try {
        let result;
        if (!Object.values(obj).indexOf("test") >= 0)
            result
        if (data.userId) {
            //update the user status on basis of userid
            let result = await User.findOneAndUpdate({_id:data.userId},{userType: data.updates.userType});
            return result;
        }
        else if (data.email) {
            //update the user status on basis of email
            let result = await User.findOneAndUpdate({email:data.email},{userType: data.updates.userType});
            return result;
        }
        else {
            //return error,required fields not provided
        }
    }
    catch (err) {
        console.log(err)
        return error.message;
    }
}
module.exports = { createUser, verifyUser, getUserByEmail, getAllUsers };
