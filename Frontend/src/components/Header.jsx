import { IoPerson } from "react-icons/io5";
import { BsCalendarHeart } from "react-icons/bs";
import { IoBagCheck } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSyncExternalStore } from "react";
import {useSelector}  from "react-redux";
import { TbSearch } from "react-icons/tb";
import Profile from "./Profile";
import StudioBanner from "./StudioBanner";

const Header=()=>{

    const bag=useSelector((store)=>store.bag);
    

    return (
        
    <header className="HeaderContainer">
    <div className="logo_container">
        <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
    </div>
    <nav className="nav_bar">
        <Link to="/men">Men</Link>
        <Link to ="/women">Women</Link >
        <Link to ="/kids">Kids</Link >
        <Link to ="/homeandliving">Home & Living</Link >
        <Link to ="/beauty">Beauty</Link >
        <Link to ="/studio" className="c1 " >Studio <sup>New</sup>
        <StudioBanner></StudioBanner>
        </Link >
       
    </nav>
    <div className="search_bar">
        <span className="material-symbols-outlined search_icon"><TbSearch size={20}/></span>
        <input className="search_input" placeholder="Search for products, brands and more"/>
    </div>
    <div className="action_bar">
        <div className="action_container profileHover hover-item">
            <span><IoPerson size={20} /></span>
         <span className="action_name  ">Profile</span>
         <Profile/>
        </div>

        
        <Link className="action_container" to ="/wishlist" >
            <span><BsCalendarHeart size={20} /></span>
            <span className="action_name">Wishlist </span>
        </Link >
        

        <Link className="action_container" to="/bag">
        <span><IoBagCheck size={20} /></span>
             <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
        </Link>
    </div>
</header>
    )
}

export default Header;