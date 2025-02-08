

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [imageError, setImageError] = useState("");

  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (fileExtension === "jpg" || fileExtension === "png") {
        setImage(file);
        setImageError("");
      } else {
        setImage(null);
        setImageError("Image must be a JPG or PNG file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageError && image) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("category", category);
      formData.append("rating", rating);
      formData.append("numReviews", numReviews);

      console.log("Form Data Entries:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/seller/addProduct",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log("Response:", data);
        navigate("/products");
      } catch (error) {
        console.error("Error adding product:", error);
        navigate("/addproduct");
      }
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
              <form
                onSubmit={handleSubmit}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="imageUrl">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="imageUrl"
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="numReviews">Number of Reviews</label>
                  <input
                    type="number"
                    className="form-control"
                    id="numReviews"
                    value={numReviews}
                    onChange={(e) => setNumReviews(e.target.value)}
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
