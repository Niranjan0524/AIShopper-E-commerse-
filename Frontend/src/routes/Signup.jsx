import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        type: 'customer'
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData={
            name:formData.name,
            email:formData.email,
            contact:formData.contact,
            password:formData.password,
            type:formData.type
        }
        console.log("User data",userData);
        try {
            
            fetch("http://localhost:3000/api/auth/signup",{
                method:"POST",
                body:JSON.stringify(userData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("Signup response",data);
                if(data.success){
                    navigate('/login');
                }
                else{
                    setError(data.message);
                    console.log("Registration failed",data.message);
                }
            })
        }
        catch(err){
            setError("Registration failed");
            console.log("Registration failed",err);
        }        
    };

    return (
        <div className="container-fluid min-vh-100">
            <div className="row min-vh-100">
                {/* Image Section */}
                <div className="col-md-6 d-none d-md-block p-0">
                    <img 
                        src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg" 
                        className="w-100 h-100 object-fit-cover"
                        alt="Sale..."
                    />
                </div>

                {/* Form Section */}
                <div className="col-md-6 d-flex align-items-center bg-light">
                    <div className="w-100 p-4 p-md-5">
                        <div className="text-center mb-4">
                            <h2 className="fw-bold text-primary">Create Account</h2>
                            <p className="text-muted">Join our community today</p>
                        </div>

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <FaUserAlt className="text-primary"/>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <MdEmail className="text-primary"/>
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <RiContactsBook2Fill className="text-primary"/>
                                    </span>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Contact Number"
                                        value={formData.contact}
                                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <FaLock className="text-primary"/>
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <select 
                                    className="form-select"
                                    value={formData.type}
                                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                                >
                                    <option value="customer">Customer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-3">
                                Sign Up
                            </button>

                            <div className="text-center mb-3">
                                <span className="text-muted">Already have an account? </span>
                                <Link to="/login" className="text-primary text-decoration-none">
                                    Login
                                </Link>
                            </div>

                            <div className="text-center">
                                <p className="text-muted mb-3">Or sign up with</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <button type="button" className="btn btn-outline-secondary">
                                        <FcGoogle size={20}/>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary">
                                        <SiFacebook size={20} className="text-primary"/>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary">
                                        <FaSquareXTwitter size={20}/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
