//// user registoration 
const { Logger } = require("winston")
const User = require("../Model/user")
const genrateToken = require("../utils/genrateToken")
const logger = require("../utils/logger")
const {validatetionRegistrationa} = require("../utils/validation")



const signUP = async(req,res)=>{
        logger.info(`userSignup api hit `)
console.log(req.body)
try{
    // const {error}= validatetionRegistrationa(req.body)
    //             //// validate schema 
    //             if(error){

    //                 logger.warn('Validation error ',error.details[0].message)
    //                 return res.status(400).json({
    //                     success:false,
    //                     message:error.details[0].message,

    //                 })
    //             }
                        const {email , password , userName}= req.body
let user1 = await User.findOne({ $or: [ { email: email }, { username: userName } ] });                        if(user1){
                            logger.warn("user already exists")
                            return res.status(400).json({
                                message:"user alerady exits"
                            })

                        }
                          let  user = new User({email, password, userName})
                            await user.save()
                            logger.warn("user saved successfully", user?._id)
                                console.log(user,"sfcdsvdfsvdfs")
                    const {accessToken,refreshToken}= await genrateToken(user)

                                res.status(201).json({
                                    success:true,
                                    message:"registpor succesfuly"
                                    ,accessToken:accessToken,
                                    refreshToken:refreshToken
                                })


}catch(error){

       logger.error(
        `Unhandled Rejection at: api/auth/error `,
     7
    )
        return res.status(500).json( {message: "server error " ,error:error.message})
        
}

}

module.exports  = {signUP}