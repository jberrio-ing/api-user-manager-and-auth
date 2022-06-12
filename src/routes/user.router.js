const route = require("express").Router()
const userService = new (require("../services/user.service"))

route.get("/", async (req, res, next) => {
    try {
        res.json(await userService.findAll());
    } catch (error) {
        next(error)
    }
})

route.get("/:id", async (req, res, next) => {
    try {
        res.json(await userService.find(req.params.id));
    } catch (error) {
        next(error)
    }
})

route.post("/", async (req, res, next) => {
    try {
        res.status(201).json(await userService.craete(req.body));
    } catch (error) {
        next(error)
    }
})

route.put("/:id", async (req, res, next) => {
    try {
        res.json(await userService.update(req.params.id, req.body));
    } catch (error) {
        next(error)
    }
})

route.delete("/:id", async (req, res, next) => {
    try {
        res.status(204).json(await userService.delete(req.params.id));
    } catch (error) {
        next(error)
    }
})

module.exports = route