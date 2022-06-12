const Joi = require("joi")

const id = Joi.number()
const names = Joi.string().min(3).max(80).required();
const family_names = Joi.string().min(3).max(80).required();

const userValidateId = Joi.object({ id: id.required() })
const userValidateCreate = Joi.object({ names, family_names })

module.exports = {
    userValidateId,
    userValidateCreate
}