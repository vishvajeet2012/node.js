const authMiddleware= async(req,res,next)=>{    
    console.log('this is auth middleware')
    const authHeader= req.headers['authorization']
    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:"unauthorized user"
        })
    }

    next()

}
module.exports=authMiddleware