import React from "react";
import { IoPerson } from "react-icons/io5";
import { BsCalendarHeart } from "react-icons/bs";
import { IoBagCheck } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbSearch } from "react-icons/tb";
import Profile from "./Profile";

const SellerHeader = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="bg-light shadow-sm">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-md-2">
            <Link to="/">
              <img
                className="img-fluid"
                src="images/myntra_logo.webp"
                alt="Myntra Home"
                style={{ width: "60px" }} 
              />
            </Link>
          </div>
          <div className="col-md-6">
            <nav className="nav justify-content-center">
              <Link className="nav-link" to="/seller/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              <Link className="nav-link" to="/seller/orders">
                Orders
              </Link>
              <Link className="nav-link" to="/seller/reports">
                Reports
              </Link>
            </nav>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-end align-items-center">
              <div className="input-group me-3">
                <span className="input-group-text bg-white border-end-0">
                  <TbSearch size={20} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search for products, brands and more"
                />
              </div>
              <div className="dropdown me-3">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IoPerson size={20} />
                  <span className="ms-2">Profile</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/seller/profile">
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className="btn btn-light position-relative"
                to="/seller/bag"
              >
                <IoBagCheck size={20} />
                <span className="ms-2">Bag</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {bag.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SellerHeader;
