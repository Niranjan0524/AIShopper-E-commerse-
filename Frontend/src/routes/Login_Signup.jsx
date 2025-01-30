import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { useEffect } from 'react';

const LoginSignup = () => {

    const handleCallback=(response)=>{
        console.log(response.credential );  
    }
    // useEffect(()=>{
    //     // global google
    //     google.accounts.id.initialize({
    //         client_id:" 549764085485-mmfkr1o8kkrfeb5qg6skb7ujrh62gc1a.apps.googleusercontent.com",
    //         callback: handleCallback
    //     });

    //     google.accounts.id.renderButton(
    //         document.getElementById("googleSignIn"),
    //         {theme:"outline",size:"large"}
    //     );
    // },[]);

    return (
        <>
            
        <div className="loginPage">
            
                
            <div className="loginImage">
                <img src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg" id="loginImage" alt="Sale..." />
            </div>
            <div className="userInfo">
                <form action="">
                    
              <label htmlFor="Name">Name</label>
              <i className='iconName'> <FaUserAlt size={18}/></i>
              <input type="text"  />
                
              <label htmlFor="Email">Email</label>
              <i className="iconEmail"><MdEmail size={20}/></i>
              <input type="email" name="email" id="mail"  />

              <label htmlFor="Contact">Contact No</label>
              <i className="iconContact"><RiContactsBook2Fill size={20}/></i>
              <input type="tel" name="contact"  />

              <label htmlFor="password">Password</label>
              <i className="iconPassword"><FaLock size={18}/></i>
              <input type="password"  name="password" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />


                </form>
            </div>
            
            <div className="loginButtons">
                
            <button type="login" class="btn btn-primary x">Signup</button>
            <p>or <Link className="loginText" to="/login">Login</Link></p>
            </div>
            <hr />
            
            <div className="signUpWith">
                <div className="labelsss">
                    <center>or sign in with</center>
                </div>

                <div className="ways">
                    
                <center><span className='iconsss' ><FcGoogle size={27}/></span>
                <span className="iconsss"><img src="/images/facebook.png" className='facebook' alt="" /></span>
                <span className="iconsss"><FaSquareXTwitter size={25}/></span>
                </center>
                <div id="googleSignIn"></div>

                </div>
            </div>
        </div>

        </>
    )
};

export default LoginSignup;
