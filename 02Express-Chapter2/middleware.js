const express = require('express')
const app =express()


const myFirstMiddleWare = (req,res,next)=>{
    console.log('this is my First middleware will run before all the routes')
    next()
}
app.get("/about",(req,res)=>{ //// 
    res.send("about page")
})

app.use(myFirstMiddleWare)

app.listen(350,()=>console.log("server is running on port 350"))
