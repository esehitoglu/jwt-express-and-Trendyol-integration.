const express = require('express')

//rota işleyicileri oluşturmak için express.Router sınıfını tanımladık
const router = express.Router()

/* /user yoluna istek atılırsa çalıştırılacak olan kodların bulunduğu dosya
yolunu belirledik yani yönlendirici modülünü uygulamada yükledik */
const userEndPoint = require('./user/user')
/* /brand/brand yoluna istek atılırsa çalıştırılacak olan kodların bulunduğu dosya
yolunu belirledik yani yönlendirici modülünü uygulamada yükledik */
const brandEndpoint = require('./brand/brand'); 

// bu kısımda /user yoluna istek atılırsa çalıştırılacak olan modülü belirledik
router.use('/user',userEndPoint)
// bu kısımda /brand yoluna istek atılırsa çalıştırılacak olan modülü belirledik
router.use('/brand',brandEndpoint)

// oluşturduğumuz router nesnesini başka dosyalarda kullabilmek için ihraç ediyoruz
module.exports = router
