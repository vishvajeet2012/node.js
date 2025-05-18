const  mongoose  = require('mongoose')
mongoose.connect("mongodb+srv://vishu:passwordhai@cluster0.xirmxjd.mongodb.net/").then(()=>console.log("database Conect successfully")).then((e)=>console.log(e))


const useSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
})
////use model
const User = mongoose.model('userhai',useSchema)
async function runQueryExample(params) {
    try{
const newUser = await User.create({
    name: "vishvajeet shukla",
    email:"vishvajeetshukla@gmail.com",
    age:"40",
    isActive:true,
    tags:['developer','desginer']

})
    }catch(e){
        console.log("Error-> ", e);
        
    } finally{
        await  mongoose.connection.close()/// closethe 
    }
    
}


runQueryExample()