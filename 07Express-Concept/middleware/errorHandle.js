class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // This is an operational error, not a programming error
  }
}

const asyncHandler= (fn)=>{
    Promise.resolve(fn(req,resizeBy,next)).catch(next);
}


const glbalErrorHandler = (err, req, res, next) => {
    console.log('Global Error Handler:', err.stack);
  if(err instanceof APIError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }
    else if (err.name ==='ValidationError') {
        return res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }else{
        return res.satus(500).json({
            status: 'error',
            message: 'Something went wrong!'
        }); 

    }

}


module.exports = {
    APIError,
    asyncHandler,
    glbalErrorHandler
};