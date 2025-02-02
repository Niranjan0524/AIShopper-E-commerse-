import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const SellerProducts = () => {
    
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    fetch("http://localhost:3000/api/seller/products")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setProducts(data.products);
    })
    .catch(err=>{
      console.error("error in fetching products",err);
    })
  },[]);

  return (
    <>
      <div>
        <h1 className="text-center">Your Products</h1>
        <Link to={"/"}>
          <button>Go to Home</button>
        </Link>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product._id}>
                <div className="card mb-4">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Category: {product.category}</p>
                    <p className="card-text">Rating: {product.rating}</p>
                    <p className="card-text">
                      Number of Reviews: {product.numReviews}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SellerProducts; 