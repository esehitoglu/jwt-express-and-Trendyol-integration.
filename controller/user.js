
// jsonwebtoken yükledik 
const jwt = require('jsonwebtoken')

// token çözümleyebilmek için jwt decode yükledik
const jwt_decode = require('jwt-decode')

// validasyon işlemleri için joi yükledik
const Joi = require('joi');  

/* bu metotda /login adresine bir istek olursa çalışacak metodu belirledik ve 
burada yapılacak olan işlemleri yazdık
*/
exports.login = (req,res)=>{

    /* joi kullanabilmek için şema oluşturduk */
    const schema = Joi.object({
        // mail kontrol edebilmek için gerekli validasyonu belirledik
        mail_control: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        // şifreyi kontrol edebilmek için gerekli validasyonu belirledik
        password_control: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    /* validate metodu ile belirlediğimiz validasyon işlemi olacak değişkenlere gelecek verileri tanımladık 
    bu değişkenlere gelecek veriler postman den gönderdiğimiz email ve password json dosyasından geliyor bu dosyaya
    yapılan istekler req.body içerisinde olduğu için bu kısımdan gelen verileri değişkenlere atadık
    */
    const controlResult = schema.validate({
        mail_control : req.body.email,
        password_control : req.body.password
    })
    // eğer validasyon işlemlerinde hata yok ise if bloğu çalışacak
    if(!controlResult.error){

        /* bu kısımda http://localhost:3000/api/user/login yoluna post işlemi yapılınca bu yoldan
        gelen token'ı alıp http://localhost:3000/api/user/register yoluna giriş yapmayı deneyeceğiz bunun için
        /login yolunun body kısmından gönderdiğimiz json objesi ile bizim burda belirlediğimiz mail ve şifre uyuşuyorsa
        if kısmına giriyor ve bu kısımda token işlemleri yapacağız
        */
        if(req.body.email === 'ensar@gmail.com' && req.body.password === 'ensar123' ){
        
        // anahtarımızı belirledik
        const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"
        // kullanıcı objesi oluşturduk
        const user = {
            id:1,
            name:'Ensar',
            surname:'Şehitoğlu',
            email:'ensar@gmail.com',
            role:1,
            user_type : 'admin'
        }
        /* eğer kullanıcı giriş yapabilmişse kullanıcıya göstereceğimiz bilgileri
        kullanıcının imzasını tanımladık burada , 
        Kullanıcı bilgileri doğru ise jwt.sign metodu ile token oluşturuyoruz.
        */
        const token = jwt.sign(
            // Payload kısmına token içinde saklamak istediğimiz verileri yazıyoruz.
            user,
            // tanımladığımız anahtarı gönderiyoruz
            secret,
            // token'nın geçerlilik süresini belirledik 7 gün
            { expiresIn:'7d' }
        )
        // res.send ile oluşturduğumuz token'ı ve kullanıcı bilgilerini gönderiyoruz
        res.send({
            status:true,
            jwt:{
                token : token,
                expiresIn:'7d'
            },
            user
        })
        }
        // eğer mail ve şifre yanlış girilmişse status:false gönderiyoruz
        else{
            let response = {
                status : false
            }
            res.status(200).send(response)
        }
    }
    // eğer validasyon işlemi hatalı ise hatalı giriş mesajı gönderiyoruz
    else{
        res.status(400).send('hatalı giriş')
    }
}

/* http://localhost:3000/api/user/register yoluna istek atıldığında çalıştırılacak 
 metodu belirledik 
*/
exports.register = (req,res) =>{
    /*
    let token = req.headers.authorization
    let response = {
        status:true,
        token:token
    }
    res.status(200).send(response) */
    
    // token dizi şekilde geldiği için onu parçalıyoruz
    let tokenArray = req.headers.authorization.split(' ')
    // parçaladığımız dizideki token'ı alıyoruz
    let token = tokenArray[1]
    // bu token'ı çözümlemek için jwt_decode kullanıyoruz
    let decoderHeader = jwt_decode(token,{ payload:true })
    // çözümlediğimiz token bilgisini göndermek için response  objesi oluşturduk
    let response = {
        status : true,
        message : decoderHeader
    }
    // çözümlediğimiz token bilgisine ait kullanıcı bilgilerini gönderiyoruz
    res.status(200).send(response)
    
}


