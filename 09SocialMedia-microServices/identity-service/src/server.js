require('dotenv').config()

const helmet = require("helmet")
const cors = require('cors')
const  mongoose = require("mongoose")
const logger = require("./utils/logger")
const { RateLimiterRedis } = require('rate-limiter-flexible');
const Redis = require('ioredis')
const express = require('express')
const app = express()
const {rateLimit } = require('express-rate-limit')
const redisClient = new Redis(process.env.REDIS_URL);
const {RedisStore} = require("rate-limit-redis")
const routes = require("./routes/identity-service-Routes")
const errorHandler = require('./middleware/errorHandleing')



const PORT = process.env.PORT || 4001;
mongoose.connect(process.env.MONGO_URL).then(()=>logger.info("conntect data base") ).catch((e)=> logger.error("mongo db  connection errror " ))

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    logger.info(`recevid ${req.method} request to ${req.url}`);
    logger.info(`req body ${req.body}`)
    next()
})

///ddos protection
const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "middleware",
    points: 10,  // Max 10 requests
    duration: 1  // Per second
});


app.use((req,res,next)=>{
    rateLimiter.consume(req.ip).then(()=> next()).catch(()=>{
        logger.warn (`rate- limit exceeded for IP : ${req.ip}`)
        res.status(429).json({success:false,message:"tooo many  requreest "})
    })
})


//// ip ke based  senseitve routes pr 
const sensetiveEndpointlimiter= rateLimit({
    windowMs:15*60*1000,
    max:50,
    standardHeaders:false,
    legacyHeaders:false,
    handler:(req,res)=>{
        logger.warn(`sensitive endpoint rate limit exceed for IP :${req.ip}`)
        res.status(429).json({success:false , message:"Too many request "})

    },
   store: new RedisStore({
    sendCommand:(...args)=>redisClient.call(...args),
})

})
////apply senseitvatelimiter in our routers 

app.use('/api/auth/signup',sensetiveEndpointlimiter)

//// routes
app.use("/api/auth",routes)

//error handler
app.use(errorHandler)

app.listen(PORT , ()=>{
    logger.info(`identity serviece running on port ${PORT}`)

})


process.on('unhandledRejection' ,(reason ,promise)=>{
 logger.error(
        `Unhandled Rejection at: ${promise}`,
        `reason: ${reason instanceof Error ? reason.stack : JSON.stringify(reason)}`
    );})