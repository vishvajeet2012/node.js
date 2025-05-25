const book = require("../models/book")

const getallbook = async(req,res)=>{
    try{
        const allbook = await book.find({})
     if(allbook){
        res.status(200).json({
            success:true,
            data:allbook
        })}
        else{
            res.status(500).json({
                success:false,
                message:"something went wrong"

            })
        }

    }catch(error){
        console.log(error)
    }

}
const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const singleBook = await book.findById(id); // Corrected typo: finById -> findById

        if (singleBook) { // Corrected typo: singlebool -> singleBook
            res.status(200).json({
                success: true,
                data: singleBook
            });
        } else {
            res.status(404).json({ // Corrected syntax: json should be a function
                success: false,
                message: "No book found"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ // Added proper error response
            success: false,
            message: "Server error"
        });
    }
};


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
                    }) }
}catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })  
}

}


const updateSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await book.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedBook
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};



const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports= {
    getallbook,
    getBookById,
    Addbook,
    updateSingleBook,
    deleteBook}