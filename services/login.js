'use strict';

const Token = require('../models/token.js');
const context = require('../middlewares/context');

module.exports = (request, response, next) => {
    let user = request.user;
    let system = request.body.context;
    // context service to get user.components & user.permissions
    context(user, system)
        .then(userWithPermissions => {
            user = userWithPermissions;
            Token.encode(user);
        })
        .then(token => {
            let result = {
                user: user,
                token: token
            };
            response.status(200).json(result);
        })
        .catch(error => {
            response.status(500).send(error.message);
        });
}