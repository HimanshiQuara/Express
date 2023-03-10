//middleware function-->have access to both request and response and we can make changes in them
// here we are creating a middleware function
// we use use next so that we can move to the next middleware function
const logger=(req,res,next)=>{
    //console.log("Hello");
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

// to initialize the middleware function we use

// here we want to return the  content in file members.js  form of JSON when we hit the below API


module.exports=logger;