const express = require('express')
const app =expres

/// application levl settings
app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.send("home page")
})
app.post("/",(req,res)=>{
    res.json({
        message:'Data recevied',
        data: req.body
    })
})

app.use((error,req,res,next)=>{
            console.log(error.stack,"erroe")
            res.status(500).send('somethign went wrong')

})