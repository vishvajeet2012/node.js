const mongoose = require("mongoose")
const argon2 = require("argon2")

const userSchema = new mongoose.Schema({

    userName :{
        type:String,
        unique: true,
        trim:true,
        required:true,

    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,

    },
    password : {
        type:String,
        required:true,

    },


    
})


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await argon2.hash(this.password);
        } catch (error) {
            return next(error);
        }
    }
    next();
});


userSchema.methods.comparePassword = async function (candidatePassword)         {
try{
    return await argon2.verify(this.password,candidatePassword)
}catch(error){
    throw error
}

}

userSchema.index({userName:'text'})

const User =  mongoose.model('User', userSchema)
module.exports =User