 const File=require("../models/File");

const cloudinary=require("cloudinary").v2;



 //local File Uplaod ->Handler function
 exports.localFileUpload=async (req,res)=>{
    try{

        //fetchFile
        const file=req.files.file;
        console.log("File a gyi hai ",file);


        let path=__dirname+"/files/"+ Date.now()+`${file.name.split(".")[1]}`;

        console.log("Path ->",path)
        file.mv(path,(err)=>{
            console.log(err);
        });
        res.json({
            success:true,
            message:"Local File Uploaded Successfully"
        })

    }
    catch(error){
        console.log("Not Able to Uplaod the file on server")

    }
 }


 //image upload's handler

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

exports.imageUpload=async(req,res)=>{
    try{
        //data fetch
        const {name,tags,email}=req.body;
        console.log(name,tags,email);


        //Receive the file 
        //imageFile is the name of file here
        const file=req.files.imageFile;
        console.log("File is------>",file);
        // File is------> {
        //     name: 'pec helicopter.png',
        //     data: <Buffer >,
        //     size: 435026,
        //     encoding: '7bit',
        //     tempFilePath: '\\tmp\\tmp-1-1708631596825',
        //     truncated: false,
        //     mimetype: 'image/png',
        //     md5: '329de591bfb4f0b895fd93a51b21b01c',
        //     mv: [Function: mv]
        //   }


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
        console.log("--------------------------------------------------------","response of cloudinary upload",response);
        // {------------------------result
        //     asset_id: '154c90281c08258503aa7c5686c2cf58',
        //     public_id: 'NewFolder/okyrlaoacm5evacrbssa',
        //     version: 1708631600,
        //     version_id: 'b9281d61576a12e6637223362716eaa7',
        //     signature: 'f8782eb41dc1016322c7441b994606ebbed416e1',        
        //     width: 693,
        //     height: 393,
        //     format: 'png',
        //     resource_type: 'image',
        //     created_at: '2024-02-22T19:53:20Z',
        //     tags: [],
        //     bytes: 435026,
        //     type: 'upload',
        //     etag: '329de591bfb4f0b895fd93a51b21b01c',
        //     placeholder: false,
        //     url: 'http://res.cloudinary.com/du4k0c0uj/image/upload/v1708631600/NewFolder/okyrlaoacm5evacrbssa.png',
        //     secure_url: 'https://res.cloudinary.com/du4k0c0uj/image/upload/v1708631600/NewFolder/okyrlaoacm5evacrbssa.png',
        //     folder: 'NewFolder',
        //     original_filename: 'tmp-1-1708631596825',
        //     api_key: '567784296758283'
        //   }
        //save the entry in the DB
        const fileData=await File.create({
            name,tags,email,imageUrl:response.secure_url,
        })

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
            message:"Something went wrong"
        })
    }
 }



 