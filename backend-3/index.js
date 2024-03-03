// const express = require('express');
// const dbConnect = require('./config/database');


// const cors = require('cors');

// require('dotenv').config();


// const app = express();
// app.use(cors());
// const allowedOrigins = ['http://localhost:3000'];
// app.use(cors({
//     origin: function(origin, callback) {
//       // Check if the origin is allowed or not
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     }
//   }));
// const PORT = process.env.PORT || 5000;

// const fileupload=require("express-fileupload");
// app.use(fileupload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));

// // cloud co/pnnect
// const cloudinary=require("./config/Cloudinary");
// cloudinary.cloudinaryConnect();

// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));

// app.use(express.json());

// //app.use('/announcements', annRoutes);

// const AllRoutes = require('./routes/AllRoutes');
// app.use("/api/v1/upload", AllRoutes);


// app.listen(PORT, () => {
//     console.log(`Server is running successfully at the port no. ${PORT}`);
// });

// dbConnect();

// app.get('/', (req, res) => {
//     res.send(`Server is running...`);
// });

//app create
const express=require("express");
const app=express();



// find port
require("dotenv").config();
const PORT=process.env.PORT

//middle ware add krna
app.use(express.json());

//the main difference between cloudinary
// upload method and file upload method is that 
//file upload method is upload file on the local server
// and cloudinary upload method upload the file on the cloud

const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//db connect
const db=require("./config/database");
db.connect();

// cloud co/pnnect
const cloudinary=require("./config/cloudinary2");
cloudinary.cloudinaryConnect();



// api route mount
const Upload=require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);


//activate server
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})


