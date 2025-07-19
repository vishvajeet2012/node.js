require('dotenv').config();

const express = require('express');
const configureCors = require('./config/corsConfig');
const requestLogger = require('./middleware/errorHandleing');
const { glbalErrorHandler } = require('./middleware/errorHandle');
const app = express()
const { urlVersioning } =require('./middleware/apVersion')
const PORT = process.env.PORT || 3000;

app.use(requestLogger)// Middleware to log requests

app.use(configureCors)// Middleware to configure CORS

app.use(express.json()) // Middleware to parse JSON bodies
app.use(glbalErrorHandler) // Global error handler middleware
app.use('/api/v1',urlVersioning('v1')) // URL versioning middleware
app.use('/api/v2',urlVersioning('v2')) // URL versioning middleware

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`

    )
})