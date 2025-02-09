import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSellerProducts } from "../store/sellerSlice";
import { useNavigate } from "react-router-dom";

import { sellerActions } from "../store/sellerSlice";
const SellerProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.seller);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSellerProducts());
  }, [dispatch]);


  const handleDelete=async (id)=>{
    console.log("this item is to be deleted:",id);

    const response = await fetch(
      `http://localhost:3000/api/seller/product/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data=await response.json();

    if(data.status==='success'){      
       console.log("This item deleted:", id);     
      dispatch(sellerActions.deleteProduct(id));
      navigate("/products");
    }
    else{
      console.log("Product deletion failed");
      //setNodification here
    }
    
  }

  const handleEdit=(id)=>{ 

   }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Products</h1>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/">
          <button className="btn btn-primary">Go to Home</button>
        </Link>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product._id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={"http://localhost:3000/"+product.imageUrl}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">
                  Number of Reviews: {product.numReviews}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-outline-primary btn-sm">
                    Edit
                  </button>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>handleDelete(product._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProducts;