const express = require('express')
const router = express.Router()

// yönlendirici modülünü uygulamada yükledik
const userController = require('../../controller/user')

// /register veya /login sluglarına istek olursa çalışacak olan fonksiyonları post metodu ile belirledik
router.post('/register',userController.register)
router.post('/login',userController.login)

// router nesnesini global yaptık , ihraç ettik 
module.exports = router