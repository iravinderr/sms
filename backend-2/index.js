//app create
const express=require("express");
const app=express();



// find port
require("dotenv").config();
const PORT=process.env.PORT

//activate server
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})
//db connect
const db=require("./config/database");
db.connect();

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




// cloud co/pnnect
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();



// api route mount
const Upload=require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);




