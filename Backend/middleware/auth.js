const jwt=require('jsonwebtoken');

exports.isLoggedIn = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const { userId, userType } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
    req.userType = userType;
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

exports.isSeller=(req,res,next)=>{
  if(req.userType!=='seller'){
    return res.status(403).json({error:'Forbidden'});
  }

  next();
};

exports.isCustomer=(req,res,next)=>{
  if(req.userType !== 'customer'){
    return res.status(403).json({error:'Forbidden'});
  }

  next();
};

