/* JWT, kullanıcının doğrulanması, web servis güvenliği, bilgi güvenliği gibi birçok konuda kullanılabilir.
express-jwt modulünü tanımladık 
*/
const expressJwt = require('express-jwt')
//kendimize bir anahtar belirledik
const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"

// jwt fonksiyonu oluşturduk ve kullanıcının izin almadan gidebileceği yolu tanımladık
function jwt(){
    return expressJwt({secret,algorithms:['HS256']}).unless({
        path : [
            '/api/user/login' // bizim izin verdiğimiz yol , bu yola erişim var
        ]
    })
}

// jwt.js sayfasını global yaptık , diğer dosyalardan erişilebilir hale getirdik
module.exports = jwt
