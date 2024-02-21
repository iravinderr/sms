const mongoose = require('mongoose');

const studentDB = mongoose.Schema({
    studentID:{
        type: Number,
        required: true,
    },
    studentName:{
        type: String,
        required: true,
        maxLength: 50,
    },
    emailID:{
        type: String,
        required: true,
        maxLength: 50,
    },
    contactNo:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
        maxLength: 10,
    },
    DOB: {
        type: Date,
        required: true,
    },
    fatherName:{
        type: String,
        required: true,
        maxLength: 50,
    },
    motherName:{
        type: String,
        required: true,
        maxLength: 50,
    },
    parentContactNo: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        maxLength: 100,
    },
    city: {
        type: String,
        required: true,
        maxLength: 20,
    },
    pinCode: {
        type: Number,
        required: true, 
    },
    state: {
        type: String,
        required: true,
        maxLength: 20,
    },
});

const teacherDB = mongoose.Schema({
    teacherName:{
        type: String,
        required: true,
        maxLength: 50,
    },

});

const deptDB = mongoose.Schema({
    deptName:{
        type: String,
        required: true,
        maxLength: 50,
    },
    deptHead:{
        type: String,
        required: true,
        maxLength: 50,
    },
    studentCount:{
        type: Number,
        required: true,
        default: 0,
    },
    staffCount:{
        type: Number,
        required: true,
        default: 0,
    },
    subjectCount:{
        type: Number,
        required: true,
        default: 0,
    },
});

const subjectDB = mongoose.Schema({
    subjectName:{
        type: String,
        required: true,
        maxLength: 50,
    },
    studentCount:{
        type: Number,
        required: true,
        default: 0,
    },
    subjectDept:{
        type: String,
        required: true,
        maxLength: 50,
    }
});

const annDB = mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 50,
    },
    content:{
        type: String,
        required: true,
        maxLength: 5000,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});


module.exports = mongoose.model("studentDB", studentDB);
module.exports = mongoose.model("teacherDB", teacherDB);
module.exports = mongoose.model("deptDB", deptDB);
module.exports = mongoose.model("subjectDB", subjectDB);
module.exports = mongoose.model("annDB", annDB);