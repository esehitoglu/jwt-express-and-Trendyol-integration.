// Require

const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const Joi = require('joi');  

// Exports
exports.login = (req,res)=>{

    const schema = Joi.object({
        
        mail_control: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        
        password_control: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

   // Scheme created and checked
    const controlResult = schema.validate({
        mail_control : req.body.email,
        password_control : req.body.password
    })
    
    if(!controlResult.error){ 
        
        if(req.body.email === 'ensar@gmail.com' && req.body.password === 'ensar123' ){

        // Token created
        const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"
        
        // Created user
        const user = {
            id:1,
            name:'Ensar',
            surname:'Şehitoğlu',
            email:'ensar@gmail.com',
            role:1,
            user_type : 'admin'
        }
        
       // Token
        const token = jwt.sign(
        
            user,
            secret,
            { expiresIn:'7d' }
        )
        // token and user send with res.send
        res.send({
            status:true,
            jwt:{
                token : token,
                expiresIn:'7d'
            },
            user
        })
        }

        else{
            let response = {
                status : false
            }
            res.status(200).send(response)
        }
    }
    
    else{
        res.status(400).send('hatalı giriş')
    }
}

// Register
exports.register = (req,res) =>{
    /*
    let token = req.headers.authorization
    let response = {
        status:true,
        token:token
    }
    res.status(200).send(response) */
    // Decode operation
    let tokenArray = req.headers.authorization.split(' ')
    let token = tokenArray[1]
    let decoderHeader = jwt_decode(token,{ payload:true })
    let response = {
        status : true,
        message : decoderHeader
    }
    
    res.status(200).send(response)
    
}


