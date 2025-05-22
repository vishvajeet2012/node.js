const express = require('express');
const { getallbook, getbookByid, Addbook, updateSinglebook, deleteBook } = require('../Controller/book-controller');
const router = express.Router();



router.get('/getallbook',getallbook)
router.get('/getby/:id', getbookByid)
router.post('/addbook', Addbook)
router.put('/update/:id',updateSinglebook )
router.delete('/delete/:id',deleteBook)


module.exports = router