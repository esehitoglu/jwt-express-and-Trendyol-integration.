// express'i uygulamada yükledik
const express = require('express');
//rota işleyicileri oluşturmak için express.Router sınıfını tanımladık
let router = express.Router();

/* bu dosyada /brand yoluna istek atılmışsa /brand kök dosyasına gelecek istekler için 
yapılacak olan işlemlerin bulunduğu dosyayı yükledik
*/
let brandController = require('../../controller/brand')

/* /brand kök dizininde sonra yapılacak olan istekleri belirledik ve 
bu yollara get ile bir istek atıldığında çalışacak fonksiyonları belirledik
*/
router.get('/',brandController.fetchBrand)
router.get('/categories',brandController.fetchCategories)
router.get('/category/:id',brandController.singleFetchCategory)

// router nesnesini global yaptık
module.exports = router;