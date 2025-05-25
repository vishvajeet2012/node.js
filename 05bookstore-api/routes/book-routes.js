const express = require('express');
const { getallbook, Addbook,  deleteBook, updateSingleBook, getBookById } = require('../Controller/book-controller');
const router = express.Router();



router.get('/getallbook',getallbook)
router.get('/getby/:id', getBookById)
router.post('/addbook', Addbook)
router.put('/update/:id',updateSingleBook )
router.delete('/delete/:id',deleteBook)


module.exports = router