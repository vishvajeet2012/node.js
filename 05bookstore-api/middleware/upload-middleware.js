const multer = require('multer')
const path = require('path')


const storage  = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
   filename : function(req,file,cd){
    cd(null , file.filename+ "-" + Date.now()+ path.extname(file.originalName))
   }
});

///// file filter fucntion 
const checkFilefitler = (req,file,cb)=>{
    if(file.minetype.startsWith("image")){
        cd(null,true)

    }else{
        cd(new Error("only image is allowed"))
    }
}



//// multer midle ware
module.exports = {
    storage:storage,
    filefilter:checkFilefitler ,
    limits:{
        fileSize: 1024 * 1024 * 5  //// 5 mb
    }
}