const fs = require('fs');
const path = require('path')

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

        let usuariosJOSN = JSON.stringify(usuarios);

        fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usuariosJOSN)

        res.redirect("/");
    }
}

module.exports = userController;