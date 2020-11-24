const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email(),

})
const schemaRegister = Joi.object({
    email: Joi.string().email().required(),
    titleName: Joi.string().required(),
    identityCard: Joi.string().length(13).required(),
    nameThai: Joi.string().required(),
    nameEng: Joi.string().required(),
    birthDate: Joi.date().iso().required(),
    address: Joi.string().required(),
    alias: Joi.string().length(10).required(),
    bloodType: Joi.string().required(),
    reactionToDrug: Joi.string().required(),
    congenitalDisease: Joi.string().required(),
    surgeryLocation: Joi.string().required(),
    surgenryDate: Joi.date().required(),
    planToHaveChildren: Joi.boolean().required(),
    personalMedicine: Joi.string().required(),
    sicknessFromRun: Joi.boolean().required(),
    exerciseUsually: Joi.boolean().required(),
    abnormalWhileExercise: Joi.boolean().required(),
    name_contact: Joi.array().required(),
    sizeOfshirt: Joi.string().required()

})
const schemaSaveDraft = Joi.object({
    email: Joi.string().email(),
    page: Joi.number(),
    titleName: Joi.string(),
    identityCard: Joi.string().length(13),
    nameThai: Joi.string(),
    nameEng: Joi.string(),
    birthDate: Joi.date().iso(),
    address: Joi.string(),
    alias: Joi.string().length(10),
    bloodType: Joi.string(),
    reactionToDrug: Joi.string(),
    congenitalDisease: Joi.string(),
    surgeryLocation: Joi.string(),
    surgenryDate: Joi.date(),
    planToHaveChildren: Joi.boolean(),
    personalMedicine: Joi.string(),
    sicknessFromRun: Joi.boolean(),
    exerciseUsually: Joi.boolean(),
    abnormalWhileExercise: Joi.boolean(),
    name_contact: Joi.array(),
    sizeOfshirt: Joi.string(),

})


module.exports = {
    schemaLogin,
    schemaRegister,
    schemaSaveDraft,

}