const getallbook = async(req,res)=>{

}

const getbookByid = async(req,res)=>{
    
}

const Addbook = async(req,res)=>{
    try{
    const data= req.body
    console.log(data)
    const newBook = await book.create(data)
                if(newBook){
                    res.status(201).json({
                        success:true,
                        data:newBook,
                        message:"book created successfully"
                    })


                }

}catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })  
}

}


const updateSinglebook = async(req,res)=>{

}


const deleteBook = async(req,res)=>{
    
}





module.exports= {
    getallbook,
    getbookByid,
    Addbook,
    updateSinglebook,
    deleteBook}