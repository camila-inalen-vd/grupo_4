const fs = require('fs');
const path = require('path')

const { validationResult } = require('express-validator');

const userController = {
    login: (req, res) => {
        res.render('user/login')
    },
    validate: (req, res) =>{
        res.redirect("/")
    },
    register: (req, res) => {
        res.render('user/register')
    },    
    create: (req, res) =>{
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            res.render("user/register", {
				errorsObjeto: resultValidation.mapped(),
				oldData: req.body
			})
        } else {
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            username: req.body.username,
            email: req.body.email,
        }
        let archivoUsuarios = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {encoding: 'utf-8'});
        let usuarios;

        if (archivoUsuarios == ""){
            usuarios = [];
        } else {
            usuarios = JSON.parse(archivoUsuarios);
        }

        usuarios.push(usuario);

        fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify(usuarios, null, 1))

        res.redirect("/");
        }
    }
}

module.exports = userController;