// trendyol'dan gelecek olan verilerin bulunduğu metotdları yükledik
const brandService = require('../services/brand')

/* /brand yoluna istek atılırsa çalışacak olan metodu tanımladık bu metotda
async anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken await ise sonucu Promise olan fonksiyonun bitmesini bekler.
res.send ile aldığımız veriyi görüntüledik
*/
exports.fetchBrand = async (req,res)=>{
    const response = await brandService.fetch()
    res.send({
        status:true,
        data: response.brands
    })
}

/* /brand/categories yoluna istek atılırsa çalışacak olan metodu tanımladık bu metotda
async anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken await ise sonucu Promise olan fonksiyonun bitmesini bekler.
res.send ile aldığımız veriyi görüntüledik
*/
exports.fetchCategories = async(req,res) =>{
    const response = await brandService.fetchCategories()
    res.send({
        status:true,
        data: response.categories
    })
}

/* /brand/category/:id yoluna istek atılırsa çalışacak olan metodu tanımladık bu metotda
async anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken await ise sonucu Promise olan fonksiyonun bitmesini bekler.
res.send ile aldığımız veriyi görüntüledik
params metodu ile ; Yakalanan değerler, yolda belirtilen rota parameterlerinin ilgili isimlerini alarak req.params objesinde tutulur.
bu tutulan değeri req.params.id kodu ile alarak servisteki değişkene parametre olarak gönderdik ve gelen cevabı ekrana yazdırdır
*/
exports.singleFetchCategory = async(req,res)=>{
    try{
        const response = await brandService.singleFetchCategory(req.params.id)

        res.send({
            status:true,
            data:response
        })
    }catch{
        res.send({
            status:false,
            data:'böyle bir data mevcut değil'
        })
    }        
}