const Product=require('../models/Product');


exports.getProfile=(req,res)=>{
  res.status(200).json({message: 'working fine'});  
};


exports.createProduct= async (req,res)=>{
  const {name,brand,price,description,category,rating,numReviews}=req.body;
  
  if(!req.file){
    return res.status(400).json({message:'Image is required'});
  }

  const imageUrl=req.file.path;
  try{
      const product=new Product({
      name,
      brand,
      price,
      description,
      imageUrl,
      category,
      rating,
      imageUrl,
      numReviews
    });

    console.log("Product in controller:",product);
    await product.save();
    res.status(201).json({
      status:'success',
      data:{
        product
      }
    });

  }
  catch(err){
    console.log(err);
    res.status(500).json({message:'Internal server error'});
  };
  
}