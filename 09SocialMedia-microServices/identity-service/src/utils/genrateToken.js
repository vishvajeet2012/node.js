const jwt = require("jsonwebtoken")
const RefreshToken = require("../Model/refreshToken")
const crypto = require("crypto");

const genrateToken = async (user)=>{
    const accessToken = jwt.sign({
        userId:user,_id,
        username: user.username
    },process.env.JWT_KEY, {expiresIn:"60m"})



const refreshToken = crypto.randomBytes(40).toString("hex")
const expiresAt = new Date()
expiresAt.setDate(expiresAt.getDate()+7)/// REFRESH TOKEN EXPIRES IN 7 DAYS 

await RefreshToken.create({
    token:refreshToken,
    user:user._id,
    expiresAt
})
    return {accessToken,refreshToken}
}
    module.exports= genrateToken