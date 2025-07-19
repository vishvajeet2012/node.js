const express = require('express');
const { asyncHandler } = require('../middleware/errorHandle');

const router = express.Router();

const items = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Description for Item 1',
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Description for Item 2',
    },
    {
        id: 3,
        name: 'Item 3',
        description: 'Description for Item 3',
    },
    {
        id: 4,
        name: 'Item 4',
        description: 'Description for Item 4',
    },
    {
        id: 5,
        name: 'Item 5',
        description: 'Description for Item 5',
    }
];

router.get('/item', asyncHandler(async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: items,
    });
}));

module.exports = router;