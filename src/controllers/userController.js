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
        res.redirect("/")
    }
}

module.exports = userController;