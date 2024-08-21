// without async handler we need to wrap each route into try catch block for catching erros 
const asyncHandler = fn => (req,res, next) => {
Promise.resolve(fn(req,res,next).catch(next))
}

export default asyncHandler;