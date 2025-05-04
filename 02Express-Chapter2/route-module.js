const express = require('express')
const app =express()

//// root route
app.get("/",(req,res)=>{
    res.send("Welcome to our home Page")
})
/// get all product 
app.get('/productgetAll ',(req,res)=>{
    const product =[{
        id: 1,
        lable:'product 1'

    },{
        id: 1,
        lable:'product 2'

    },{
        id: 2,
        lable:'product 3'

    },
            
]




res.json(product)
    })

    ///// get sindle product 
    app.get('/product:id',(req,res)=>{
 const productId = parseInt(req.params.id)

        const product =[{
            id: 1,
            lable:'product 1'
    
        },{
            id: 2,
            lable:'product 2'
    
        },{
            id: 3,
            lable:'product 3'
    
        },
                
    ]
const getSingleProduct =     product.find(product=> product.id ====productId)
            if(getSingleProduct){
                res.send(getSingleProduct)
            }
            else{
                res.status(404).send('product is not found plase try with')
            }
    })

const port =545
    app.listen(port,()=>console.log(`port server`) ) 
