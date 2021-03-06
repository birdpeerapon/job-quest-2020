const jsonwebtoken = require('jsonwebtoken');
const { failed } = require('../config/response');
const { err, debug } = require('../config/debug');
const { getOriginPath } = require('../functions');
const { ignoreCheckToken } = require('../utils');

exports.validate_token = () => {
    return (req, res, next) => {
        if (!req.originalUrl) {
            return failed(res, NULL, 404);
        }

        /**
         * TODO CHECK AUTHORIZATION
         */

        const origin = getOriginPath(req.originalUrl);
        const checkIgnore = ignoreCheckToken.indexOf(origin) >= 0;
        if (checkIgnore) {
            return next();
        }

        if (req.headers && req.headers.authorization) {
            jsonwebtoken.verify(req.headers.authorization, process.env.SIGN, (error, decode) => {
                if (error) {
                    err('token not found', req.originalUrl)
                    failed(res, 'token not found')
                } else {
                    // value = 
                    req.token = req.headers.authorization,
                        req.email = decode.email
                    debug('TOKEN IS CALL => ', req.session.token)
                    next();
                }
            })
        } else {
            err('token not found', req.originalUrl)
            failed(res, 'token not found')
        }
    }
}