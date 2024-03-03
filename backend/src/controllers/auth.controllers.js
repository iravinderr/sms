const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const studentDB = require("../models/student.models");
const teacherDB = require("../models/teacher.models");

const loginFunc = async(email, password, userDB) => {

}


exports.login = (req, res) => {
    const {email, password, role} = req.body;

    if(role === "teacher"){
        return loginFunc(email, password, teacherDB);
    }
    else if(role === "student"){
        return loginFunc(email, password, studentDB);
    }
    // else if(role === "admin"){

    // }
}


const createUserFunc = async(res, email, password, userDB) => {
    try{
        const userExists = await userDB.findOne({email});
        if(userExists){
            res.status(400).json({
                success: false,
                message: `User Already Exists`,
                data: userExists,
            });
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: `Error in hashing the password`
            });
        }

        const user = await userDB.create({email, password:hashedPassword});

        res.status(200).json({
            success: true,
            data: user,
            message: `User created successfully`
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


exports.createUser = (req, res) => {
    const {email, password, role} = req.body;

    if(role === "teacher"){
        return createUserFunc(res, email, password, teacherDB);
    }
    else if(role === "student"){
        return createUserFunc(res, email, password, studentDB);
    }
    // else if(role === "admin"){
    //     return 
    // }
}