const express = require('express')

//rota işleyicileri oluşturmak için express.Router sınıfını
const router = express.Router()

/* /user yoluna istek atılırsa çalıştırılacak olan kodların bulunduğu dosya
yolunu belirledik yani yönlendirici modülünü uygulamada yükledik */
const userEndPoint = require('./user/user')
const brandEndpoint = require('./brand/brand'); 

// bu kısımda /user yoluna istek atılırsa çalıştırılacak olan dosyayı belirledik
router.use('/user',userEndPoint)
router.use('/brand',brandEndpoint)

// oluşturduğumuz router nesnesini başka dosyalarda kullabilmek için ihraç ediyoruz
module.exports = router
