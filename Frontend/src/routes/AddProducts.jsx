import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  
  const nameRef = useRef();
  const brandRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageUrlRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const numReviewsRef = useRef();

  const [imageError, setImageError] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const { value } = e.target;
    const fileExtension = value.split(".").pop().toLowerCase();
    if (fileExtension === "jpg" || fileExtension === "png") {
      setImageError("");
    } else {
      setImageError("Image must be a JPG or PNG file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageError) {
      const formData=new FormData();
      formData.append("name",nameRef.current.value);
      formData.append("brand",brandRef.current.value);
      formData.append("price",priceRef.current.value);
      formData.append("description",descriptionRef.current.value);
      formData.append("image",imageUrlRef.current.files[0]);
      formData.append("category",categoryRef.current.value);
      formData.append("rating",ratingRef.current.value);
      formData.append("numReviews",numReviewsRef.current.value);


      fetch("http://localhost:3000/api/seller/addProduct", {
        method: "POST",
        body: formData,
      }).then((response) => {
        console.log("Response:", response);
      }).catch((error) => {
        console.error("Error adding product:", error);
      });
      
      navigate("/")
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h3>Add Product</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    ref={brandRef}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    ref={priceRef}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    ref={descriptionRef}
                    required
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="imageUrl">Image </label>
                  <input
                    type="file"
                    className="form-control"
                    id="imageUrl"
                    ref={imageUrlRef}
                    onChange={handleImageChange}
                    required
                  />
                  {imageError && (
                    <div className="text-danger">{imageError}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    ref={categoryRef}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    ref={ratingRef}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="numReviews">Number of Reviews</label>
                  <input
                    type="number"
                    className="form-control"
                    id="numReviews"
                    ref={numReviewsRef}
                    required
                  />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
