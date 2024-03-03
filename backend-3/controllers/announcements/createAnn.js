const annDB = require('../../models/dbSchemas');

exports.createAnn = async(req, res) => {
    try{
        const {title, content} = req.body;

        const ann = await annDB.create({title, content});

        res.status(200).json({
            success: true,
            data: ann,
            message: "Announcement created successfully"
        });
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        })
    }
}