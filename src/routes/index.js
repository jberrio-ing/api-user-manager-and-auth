const { Router } = require("express")
const userRouter = require("./user.router")

const router = Router();

const api_routes = (app) => {
    router.use('/users',userRouter)
    app.use('/api',router)
}

module.exports = {
    api_routes
}