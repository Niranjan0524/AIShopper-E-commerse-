import { RiLoginBoxLine } from "react-icons/ri";
import { HiLogin } from "react-icons/hi";
import { TbStars } from "react-icons/tb";
import { Link } from "react-router-dom";
const Profile=()=>
{


    return (
      <>
        <div class="sidebar hover-box">
          <div class="welcome">
            <h2>Welcome</h2>
            <p>To access account and manage orders</p>
            <Link to="/loginsignup">
              <button class="login-signup">
                {" "}
                <RiLoginBoxLine /> LOGIN / SIGNUP
              </button>
            </Link>
            <hr />
          </div>
          <ul class="menu">
            <li>Orders</li>
            <li>Wishlist</li>
            <Link to="/addproduct">
              <li>Add Products</li>
            </Link>
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