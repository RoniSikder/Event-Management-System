const jwt = require('jsonwebtoken')
require('dotenv')

const auth = async (request,response,next)=>{
  const token = request.body.token
  const check = await jwt.verify(token,process.env.Particiapate_Token_Secert||process.env.Host_Token_Secret)
  if(check){
    response.send({
      massage:"Token is Verified and the Further Process is Started Successfully"
    })
    next()
  }
  else{
    response.send({
      massage:"Sorry The Token Provide is not Autherized so further Proccesses are Aborted"
    })
  }

}
module.exports = auth;