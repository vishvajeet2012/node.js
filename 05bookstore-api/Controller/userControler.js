const userSchema = require("../models/userModel")
const bcrypt = require("bcrypt")
const registorUser = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;
console.log(req.body)
        //// check if user alreday exits
        const checkuserIfexits = await userSchema.findOne({
            $or: [{ email: email }, { userName: userName }]
        });

        if (checkuserIfexits) {
            return res.status(400).json({
                success: false,
                message: "email and user name already resgistro try with new usrname and email"
            });
        }

        /// hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await userSchema.create({
            userName,
            email,
            password: hashPassword,
            role: role || "user"
        });

        if (newUser) {
            return res.status(201).json({
                success: true,
                message: "user created successfully"
            });
        }

    } catch (e) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
};

const loginUser = async(req,res)=>{
    try{
        const {email, password} = req.body;

        //// check if user exits
        const user = await userSchema.findOne({email: email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "user not found with this email"
            });
        }

        //// compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "invalid credentials"
            });
        }

        //// login success
        return res.status(200).json({
            success: true,
            message: "login successfull",
            user: {
                userName: user.userName,
                email: user.email,
                role: user.role
            }
        });
        
    }catch(e){
        console.log(e)
        res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
}


module.exports= {registorUser,loginUser}