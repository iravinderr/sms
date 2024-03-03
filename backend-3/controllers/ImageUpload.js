
// //image Upload


async function uploadFileToCloudinary(file,folder){
    const options={
        folder
    };
    //the path of the temp folder which is made on the server
    console.log("temp file path", file.tempFilePath);
    options.resource_type="auto";

    return await cloudinary.uploader.upload(file.tempFilePath,options);
 }
 function isFileTypeSupported(fileType,supportedTypes){
    return supportedTypes.includes(fileType);
 }


require("dotenv").config();


//File-Upload2 Handler code

//const FileSchema=require("D:\Web Dev material\New_Project\sms\backend\controllers\ImageUpload.js");

const cloudinary=require("cloudinary").v2;

exports.imageUpload=async(req,res)=>{
    try{
        //data fetch
        const {name,tags,email}=req.body;
        console.log("Body of the request is ",req.body);
        console.log(name,tags,email);


        //Receive the file 
        //imageFile is the name of file here
        const file=req.file.imageFile;
        console.log(file);


        //validation
        const supportedTypes=["jpg","jpeg","png"];
        const fileType=file.name.split(".")[1].toLowerCase();

        console.log("File Type ",fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            })
        }

        //IF file type supported or match
        console.log("Uploading to codehelp");
        const response=await uploadFileToCloudinary(file,"NewFolder");
        console.log("--------------------------------------------------------","result",response);
        
        //save the entry in the DB
        // const fileData=await FileSchema.create({
        //     name,tags,email,imageUrl:response.secure_url,
        // })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully Uploaded"
        });

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong babay"
        })
    }
 }


