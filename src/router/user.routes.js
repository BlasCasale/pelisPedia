const { Router } = require('express');
const userRouter = Router();
const { regExp, regExp_password, regExp_mail } = require('../utils/utils');
const createUserHandler = require('../handler/createUserHandler');
const getUserHandler = require('../handler/getUserHandler');

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name) throw new Error('Por favor complete el campo solicitado.');

    if (name.length <= 3 && !regExp.test(name)) throw Error('Por favor ingrese un nombre válido.');
    else next();
};

const validateLast_name = (req, res, next) => {
    const { last_name } = req.body;
    if (!last_name) throw Error('Por favor complete el campo solicitado');

    if (last_name.length <= 3 && !regExp.test(last_name)) throw Error('Por favor ingrese un apellido válido');
    else next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) throw Error('Por favor complete el campo solicitado.');

    if (!regExp_password.test(password)) throw Error('Por favor ingrese una contraseña válida.');
    else next();
};

const validateMail = (req, res, next) => {
    const { mail } = req.body;
    if (!mail) throw Error('Por favor complete el campo solicitado');

    if (!regExp_mail.test(mail)) throw Error('Por favor ingrese un mail válido.');
    else next();
};

userRouter.post('/getUser', [validateMail, validatePassword], getUserHandler);
userRouter.post('/createUser', [validateName, validateLast_name, validateMail, validatePassword], createUserHandler);

module.exports = userRouter;