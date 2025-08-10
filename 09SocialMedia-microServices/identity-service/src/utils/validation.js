const Joi = require('joi')

const validatetionRegistrationa   = (data)=> {
        const schema  = jdi.object({
            username : Joi.string().min(3).max(50).required(),
            email: Joi.string().email.required(),
            password: Joi.string().password.required()

        })
                return  schema.validate(data)

            }

            module.exports = validatetionRegistrationa