const annDB = require('../../models/dbSchemas');

exports.getAnn = async(req, res) => {
    try{
        // fetching id from the request parameters
        const {id} = req.params;

        // retrieving the blog from the database
        const ann = await annDB.findById({_id: id});

        if(!ann){
            res.status(404).json({
                success: false,
                message: `No blog with id ${id} is found in the database`,
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: ann,
                message: "Blog retrieved successfully",
            })
        }
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