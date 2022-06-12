const error_handlers = (error, req, res, next) => {
    if (error.isBoom) {
        const { statusCode, ...payload } = error.output.payload
        res.status(statusCode).json(payload)
    } else {
        res.status(500).json({
            error: "Internal server error",
            message: error.message
        })
    }
}

module.exports = {
    error_handlers
}