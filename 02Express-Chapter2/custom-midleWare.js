const express = require('express');
const app = express();

// Logger middleware
const requestTimeStamplogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} - Request made to ${req.method} ${req.url}`);
    next();
};

// Apply middleware globally BEFORE routes
app.use(requestTimeStamplogger);

// Define routes
app.get('/home', (req, res) => {
    res.send('Home page');
});
app.get('/about', (req, res) => {
    res.send('About page');
})

app.listen(350, () => console.log('Server is running on port 350'));
