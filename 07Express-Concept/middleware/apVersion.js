


const urlVersioning = (version)=>(req,res,next)=>{
    if(req.path.startsWith(`/${version}`)){
        req.url = req.url.replace(`/${version}`, '');
        next();
    }
    else{
        res.status(404).json({
            status: 'fail',
            message: `API version ${version} not found`
        });
    }

}


const headerVersioning = (version) => (req, res, next) => {
   
    if(req.get('Accept-Version') === version) {
        next();
    }
    else {
        res.status(404).json({
            status: 'fail',
            message: `API version ${version} not found`
        });
    }
};


// applicatioon /json -> applicaiton/vnd.api.v1+json
const contentTypeVersioning = (version) => (req, res, next) => {
    const constentType = req.get('Content-Type');
    if(constentType && constentType.includes(`application/vnd.api.${version}+json`)) {
        next();
    }
    else {
        res.status(404).json({
            status: 'fail',
            message: `API version ${version} not found`
        });
    }
};  
module.exports = { urlVersioning, headerVersioning, contentTypeVersioning };    