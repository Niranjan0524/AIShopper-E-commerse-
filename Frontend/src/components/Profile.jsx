import { RiLoginBoxLine } from "react-icons/ri";
import { TbStars } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {authActions} from '../store/authSlice';
import { useEffect } from "react";

const Profile=()=>
{

    const user=useSelector((state)=>state.auth);
  

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(authActions.logout());
      navigate("/signup");
    };

  
    return (
      <>
        <div class="sidebar hover-box">
          <div class="welcome">
            <h2>Welcome</h2>
            <p>To access account and manage orders</p>
            {user.isLoggedIn === "true" ? 
             (
              <button class="btn btn-danger mr-5" onClick={handleLogout}>
                <RiLoginBoxLine /> Logout
              </button>
            ):(
              <Link to="/signup">
                <button class="login-signup">
                  {" "}
                  <RiLoginBoxLine /> LOGIN / SIGNUP
                </button>
              </Link>
            )}
            {user.isLoggedIn ==='true' ? <button className="btn btn-danger ml-5">Go To Profile</button>:null}
            <hr/>
          </div>
          <ul class="menu">
            <li>Orders</li>
            <li>Wishlist</li>
            {user.userType === "seller" ? (
              <Link to="/addproduct">
                <li>Add Products</li>
              </Link>
            ) : null}
            <li>Contact Us</li>
            <li class="new-feature">
              Myntra Insider{" "}
              <span class="new">
                <TbStars size={15} />
                New
              </span>
            </li>
            <hr />
            <li>Myntra Credit</li>
            <li>Coupons</li>
            <li>Saved Cards</li>
            <li>Saved VPA</li>
            <li>Saved Addresses</li>
          </ul>
        </div>
      </>
    );
}


export default Profile;