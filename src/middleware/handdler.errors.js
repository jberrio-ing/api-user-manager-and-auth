const error_handlers = (error,req,res,next) => {
    if(error)
        res.status(500).json({
            message:"Ocurrio un error inesperado",
            error:error.message
        })
    next()
}


module.exports = {
    error_handlers
}