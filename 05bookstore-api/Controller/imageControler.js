const imageModle = require("../models/imageModel")
const cloudinaryHelper = require("../helper/cloudnariyHelper")
try{
    const uplaodImage = async(req,res)=>{
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"image is required"
            })}

        }
        const {url , publicId} = await 

}catch(e){

    console.log(e)
    res.status(500).json({
        success:false,
        message:"something went wrong"
    })
}