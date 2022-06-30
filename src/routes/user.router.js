const route = require("express").Router()
const userService = new (require("../services/user.service"))
const validationHanddler = require("../middleware/joi.validator");
const { userValidateId, userValidateCreate } = require("../validators/user.validator");

route.get("/", async (req, res, next) => {
    try {
        res.json(await userService.findAll());
    } catch (error) {
        next(error)
    }
})

route.get("/:id",
    validationHanddler(userValidateId, "params"),
    async (req, res, next) => {
        try {
            res.json(await userService.find(req.params.id));
        } catch (error) {
            next(error)
        }
    }
)

route.post("/", validationHanddler(userValidateCreate),
    async (req, res, next) => {
        try {
            res.status(201).json(await userService.craete(req.body));
        } catch (error) {
            next(error)
        }
    }
)

route.put("/:id",
    validationHanddler(userValidateId, "params"),
    validationHanddler(userValidateCreate),
    async (req, res, next) => {
        try {
            res.json(await userService.update(req.params.id, req.body));
        } catch (error) {
            next(error)
        }
    }
)

route.delete("/:id",
    validationHanddler(userValidateId, "params"),
    async (req, res, next) => {
        try {
            res.status(204).json(await userService.delete(req.params.id));
        } catch (error) {
            next(error)
        }
    }
)

module.exports = route