const userController = {
    login: (req, res) => {
        res.render('login')
    },
    validate: (req, res) =>{
        res.redirect("/")
    },
    register: (req, res) => {
        res.render('register')
    },    
    create: (req, res) =>{
        res.redirect("/")
    }
}

module.exports = userController;