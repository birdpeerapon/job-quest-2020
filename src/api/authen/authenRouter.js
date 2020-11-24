const route = require('express')['Router']();
const authenController = require('./authenController.js');
const { schemaLogin, schemaRegister, schemaSaveDraft } = require('./authenSchema')
const { validate_schema } = require('../../middleware/validate_schema');
const { validate_token } = require('../../middleware/validate_token')


route.post('/login',
    validate_schema([schemaLogin]),
    authenController.login
)
route.post('/saveDraft',
    validate_token(),
    validate_schema([schemaSaveDraft]),
    authenController.saveDraft

)
route.post('/register',
    validate_token(),
    validate_schema([schemaRegister]),
    authenController.register
)
route.get('/profileByEmail',
    validate_token(),
    authenController.getProfile
)


module.exports = route;