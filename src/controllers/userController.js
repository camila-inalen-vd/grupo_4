const fs = require('fs');
const path = require('path')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const { validationResult } = require('express-validator');

const userController = {
    login: (req, res) => {
        return res.render('user/login')
    },

    processLogin: (req, res) =>{
        let userToLogin = User.findByField('email', req.body.email)

        if(userToLogin){
            let isOkPassword = bcrypt.compareSync(req.body.contraseña, userToLogin.contraseña)
            if(isOkPassword){
                delete userToLogin.contraseña;
                req.session.userLogged = userToLogin;
                if(req.body.recordar){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60 * 60 * 24 * 365)})
                }

                return res.redirect('profile');
            }
        }
        return res.render('user/login', { 
            errors:{
                email:{
                    msg: 'Credenciales invalidas'
                }
            }
        })
    },

    register: (req, res) => {
        return res.render('user/register');
    },

    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render("user/register", {
				errorsObjeto: resultValidation.mapped(),
				oldData: req.body
			})
        }

        let userInDB = User.findByField('email', req.body.email)

        if(userInDB) {
            return res.render("user/register", {
				errorsObjeto:{
                    email:{
                        msg: 'Este email ya esta registrado'
                    }
                },
				oldData: req.body
			})
        }

        let usertoCreate = {
            ...req.body,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10)
        }

        User.create(usertoCreate)

        return res.redirect('/')
    },

    profile: (req, res) => {
        return res.render('user/profile', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;