const jwt=require('jsonwebtoken');

exports.isLoggedIn=  (req,res,next)=>{

  const token=req.headers.authorization.split(' ')[1];

  console.log('Token inside the auth middleware:',token);
  if(!token){
    return res.status(401).json({message:'uk unauthorized'});
  }

  try{
    const {userId,userType}=jwt.verify(token,process.env.JWT_SECRET);
    req.userId=userId;
    req.userType=userType;
    //basically now usedId and usetype will be stored in request so it can be accessesd by all the file in server side.
    next();
  }
  catch(err){
    console.log(err);
    return res.status(401).json({message:err.message});
  }

 
}


exports.isSeller=(req,res,next)=>{
  if(req.userType!=='seller'){
    return res.status(403).json({error:'Forbidden'});
  }

  next();
}

exports.isCustomer=(req,res,next)=>{
  if(req.userType !== 'customer'){
    return res.status(403).json({error:'Forbidden'});
  }

  next();
}

