const notFoundRoute = ( req,res,next) => {
    const error = new Error (`Not found - ${req.originalUrl}`);
    req.status(404);
    next(error)
}


//  if the error like the id does not exists insted of showing a html in response we can build customized error
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  
    if (err.name === "CastError" && err.kind === "ObjectId") {
      message = "Resource not found";
      res.status(404);
    }
  
    res.status(statusCode).json({
      message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
export {notFoundRoute, errorHandler};