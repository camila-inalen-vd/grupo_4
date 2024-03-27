const express = require('express');
const router = express.Router();
const path = require('path')
const userController = require('../controllers/userController')
const multer = require('multer');


const registerMiddleware = require("../middlewares/routes/registerMiddleware");
const guestMiddleware = require('../middlewares/routes/guestMiddleware')
const authMiddleware = require('../middlewares/routes/authMiddleware')
const adminMiddleware = require('../middlewares/routes/adminMiddleware')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/user')
    } ,
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        const allowedExtensions = ['png', 'jpg', 'gif', 'jpeg'];
        const fileExtension = path.extname(file.originalname).toLowerCase().substring(1);

        if (!allowedExtensions.includes(fileExtension)) {
            req.fileValidationError = 'La imagen debe estar en formato PNG, JPG, JPEG o GIF.';
            return cb(null, false, new Error('La imagen debe estar en formato PNG, JPG, JPEG o GIF.'));
        }

        cb(null, true);
    }
});


router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.processLogin)

router.get('/register', guestMiddleware, userController.register)
router.post('/register', upload.single('avatar'), registerMiddleware, userController.processRegister)

router.get('/profile', authMiddleware, userController.profile)

router.get('/logout', userController.logout)

router.get('/list', authMiddleware, adminMiddleware ,userController.list)

router.delete('/delete/:id', authMiddleware, adminMiddleware, userController.deleteUser)

module.exports = router;