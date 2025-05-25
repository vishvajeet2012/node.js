const jwt =require('jsonwebtoken')
const authMiddleware= async(req,res,next)=>{    
    console.log('this is auth middleware')
    const authHeader= req.headers['authorization']
        const token  = authHeader && authHeader.split('   ')[1]
        if(!token){
            return res.status(401).json({
                success:false,
                message:"unauthorized"
            })
        }
try{
const extractTokenInfo =jwt.verify(token,process.env.JWT_SECRET||"defaultsecret")
req.user=extractTokenInfo
console.log(req.user)
req.userInfo = extractTokenInfo

}
catch(e){
    console.log(e)
    return res.status(401).json({
        success:false,
        message:"unauthorized"
    })
}


    next()

}
module.exports=authMiddleware