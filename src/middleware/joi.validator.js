const Joi = require("joi")

module.exports = (schema, dataKey = "body") =>
    (req, res, next) => {
        const validate = schema.validate(req?.[dataKey] || {})
        if (validate.error)
            res.status(400).json(validate)
        else next()
    }