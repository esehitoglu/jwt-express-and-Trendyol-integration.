// express projeye dahil edilbi
const express = require('express')
const app = express()

/* api yoluna request gönderilirse çalıştırılacak olan işlemlerin bulunduğu
dosya dahil edildi 
*/
const endpoint = require('./routes/api')

// jwt ve error handler dosyaları dahil edildi
const jwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

/* Ara katman yazılımını app.use kullandık ayarlamak için ; */

/* kullanıcıdan bize gönderilecek olan json dosyalarının kullanılabilmesi
için express.json() komutunu kullandık */
app.use(express.json())

// express-jwt yi kullandığımız bir jwt fonksiyonu nu tanımladık 
app.use(jwt())

// /api yoluna request yapıldığında çalıştırılacak dosyayı belirledik
app.use('/api',endpoint)

// eğer bir hata olursa çalışacak olan fonksiyonu belirledik
app.use(errorHandler)

// server'ı 3000 portu ile ayağı kaldırdık
app.listen(3000,(req,res)=>{
    console.log("çalıştı")
}) 