const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express()

/// set the view enigne as ejs
app.set('view engine', 'ejs')

///set the directory for the view
app.set('views', path.join(__dirname,'views'))

const products = [
        { id: 1, label: 'product 1' },
        { id: 2, label: 'product 2' },
        { id: 3, label: 'product 3' },
    ];
    

    app.get('/',(req,res)=>{
        res.render('home',{title:"home", products:products})
        
    })

    app.get('/about',(req,res)=>{
        res.render('about',{title:"about" ,products:products})
    })


    app.listen(5050,()=>console.log("server is running on port 5050"))