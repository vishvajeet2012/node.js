require('dotenv').config();

const express = require('express');
const configureCors = require('./config/corsConfig');
const requestLogger = require('./middleware/errorHandleing');
const { glbalErrorHandler } = require('./middleware/errorHandle');
const app = express()
const { urlVersioning } =require('./middleware/apVersion');
const CreateRateLimiter = require('./middleware/rateLimitung');
const itemRoutes = require('./routes/item-routes');
const PORT = process.env.PORT || 3000;

app.use(requestLogger)// Middleware to log requests
app.use(configureCors())// Middleware to configure CORSapp.use(CreateRateLimiter(100, 15 * 60 * 1000)) // Rate limiting middleware: 100 requests per 15 minutes

////chapter 7  done x

app.use(express.json()) // Middleware to parse JSON bodies
//app.use(urlVersioning('v1')) // URL versioning middleware
//app.use(urlVersioning('v2')) // URL versioning middleware

app.use('/api/v1', itemRoutes);

app.use(glbalErrorHandler) // Global error handler middleware

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`

    )
})