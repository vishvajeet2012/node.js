const express = require('express');
const { getallbook, Addbook,  deleteBook, updateSingleBook, getBookById } = require('../Controller/book-controller');
const authMiddleware = require('../middleware/authmiddleware');
const router = express.Router();



router.get('/getallbook',authMiddleware,getallbook)
router.get('/getby/:id',authMiddleware, getBookById)
router.post('/addbook',authMiddleware, Addbook)
router.put('/update/:id',authMiddleware,updateSingleBook )
router.delete('/delete/:id',authMiddleware,deleteBook)


module.exports = router