const {verify} = require("jsonwebtoken")

const validateToken = (req,res,next) => {
    const accessToken = req.header("token")

    if(!accessToken){
        return res.json({error:"User not Logged In"})
    }
    if(accessToken === ""){
        return res.json({error:"User not Logged In"})
    }
    try{
        const validToken = verify(accessToken,"pbpbrns12301234")
        req.user = validToken
        if(validToken){
            return next();
        }
        
    }catch(e){
        return res.json({error:e})
    }
}

module.exports = {validateToken};