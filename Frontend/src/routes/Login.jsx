import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdEmail size={20} className="mr-2" />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaLock size={18} className="mr-2" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="invalid-feedback">
                    Please enter your password.
                  </div>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <Link to="/forgot-password" className="text-primary">
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center mt-3">
                <p>
                  or <Link to="/signup">Signup</Link>
                </p>
              </div>
              <hr />
              <div className="text-center">
                <p>or sign in with</p>
                <div className="d-flex justify-content-center">
                  <span className="mx-2">
                    <FcGoogle size={27} />
                  </span>
                  <span className="mx-2">
                    <SiFacebook size={27} />
                  </span>
                  <span className="mx-2">
                    <FaSquareXTwitter size={25} />
                  </span>
                </div>
              </div>
              <div id="googleSignIn" className="mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
