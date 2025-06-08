const imageModle = require("../models/imageModel")
const {uploadedToCloudnairy} = require("../helper/cloudnariyHelper")
try{
    const uplaodImage = async(req,res)=>{
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"image is required"
            })}

        }
        const {url , publicId} = await uploadedToCloudnairy(req.file.path)
        ////// now store the image url and publicid alsong with the uploaded user id 
        const newImage = await imageModle({
            url:url,
            publicId:publicId,
            uploadedBy:req.userInfo.userId///// user id form auth controler userinfon from auth midlerware
        })  
        await newlyupalodedimage.save()
        res.status(201).json({
            success:true,
            message:"image uploaded successfully",
            image:newImage
        })

}catch(e){

    console.log(e)
    res.status(500).json({
        success:false,
        message:"something went wrong"
    })
}


module.exports= {uplaodImage
    
}