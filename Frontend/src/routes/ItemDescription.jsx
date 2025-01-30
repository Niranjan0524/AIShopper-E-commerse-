import { MdMargin } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { PiBagSimpleBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { useRef, useState } from 'react';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from '../store/BagSlice';
import { wishListActions } from '../store/WishListSlice';
import { CiSquareRemove } from "react-icons/ci";

const ItemDescription=()=>{

    const location = useLocation();
    const { item } = location.state || {};
    const dispatch=useDispatch();
    const wishListItems=useSelector((store)=>store.wishList);
    const bagItems=useSelector((store)=>store.bag);
   

    const finalItemStatus=()=>{

      let s=false;
      
      for(let i=0;i<bagItems.length;i++){
       if(bagItems[i]===item.id){
          s=true;
       }
      }
      return s;
  }

    const finalItemStatus2=()=>{

      let s=false;
      
      for(let i=0;i<wishListItems.length;i++){
       if(wishListItems[i]===item.id){
          s=true;
       }
      }
      return s;
  }
    
    const divStyle = {
       padding:'0px',
        margin:'0px'
      };

      const [isValid,setIsValid]=useState(false);
      const pincodeElement=useRef();
      const [checks,setChecks]=useState(false);

      const validatePin=(value)=>{
        const regex = /^\d{6}$/;
        setIsValid(regex.test(value));
        console.log(regex.test(value));
      }


      const handleCheck=()=>{
        const pincode=pincodeElement.current.value;
        if(pincode.length != 6){          
          return;
        }
        validatePin(pincode);      

      }

      const handleChange=()=>{
        pincodeElement.current.value="";
        validatePin(false);
      }

      const handleChecks=(event)=>{
        const { value } = event.target;
        
        if(value.length != 6){
          setChecks(false);          
        }
        else{
          setChecks(true);
        }
      }


      const handleAddToBag=()=>{
        dispatch(bagActions.addToBag(item.id));
      }

      const handleRemove=()=>{
    
        
        dispatch(bagActions.removeFromBag(item.id));
    }

      const handleWishlist=()=>{
        if(finalItemStatus2()){
          
          dispatch(wishListActions.removeFromWishList(item.id));
        }
        else{
          
            dispatch(wishListActions.addToWishList(item.id)); 
        } 
      }

      const [itemId,setItemId]= useState('0');

     
      
  return <>
    

<div className="container text-center">
  <div style={divStyle} className="row  "  >
    <div className="col itemPics">
      <img src={item.image}   className="p" alt="" />
      <img src={item.image}  className="p" alt="" />
      <img src={item.image}  className="p"  alt="" />
      <img src={item.image}  className="p"  alt="" />


    </div>
    <div className="col itemDescription ">
      
      <p className="picBrand ">{item.company}</p>
      <p className="picName">{item.item_name}</p>
      
      
        <div className="picRatings">
            <p className="r">{item.rating.stars} ⭐</p>
            <p className="r">{item.rating.count} Ratings</p>
        </div>

      <hr />
     
      <div className="price price2">
        <span className="current-price current-price2">Rs {item.current_price}</span>
        <span className="original-price original-price2">Rs {item.original_price}</span>
        <span className="discount discount2">({item.discount_percentage}% OFF)</span>
    </div>
      <p className='tax'>Inclusive of all taxes</p>

      <div className="sizeSelection">
        <p className="sizeInfo1">SELECT SIZE (UK Size)</p>
        <p className="sizeInfo2">Size Chart</p>     
      </div>

      <div className="sizeNumbers">
        
        <p className="numbers">6</p>
        <p className="numbers">7</p>
        <p className="numbers">8</p>
        <p className="numbers">8</p>
        <p className="numbers">11</p>
        <p className="numbers">12</p>
        <p className="numbers">13</p>
      </div>


      <div className="AddandBuy">
      {
        finalItemStatus()==true?
        <button type="button " className="btn btn-danger b b2" onClick={handleRemove}><CiSquareRemove size="25"/>  Remove From Bag</button>
        :
        <button type="button " className="btn btn-danger b" onClick={handleAddToBag}><PiBagSimpleBold size="20"/>  ADD TO BAG</button>
      }
      {
        finalItemStatus2()==true ?
        
      <button type="button " className="btn btn-outline-dark b" onClick={handleWishlist}>
      <img src="/images/heart.png" className='xx'  width={"18px"} alt="Liked" />
         
       Remove</button>
        :
        
      <button type="button " className="btn btn-outline-dark b" onClick={handleWishlist}><FiHeart size="20"/>  Wishlist</button>
     
      }


      </div>
      <br />      
      <hr />
      <div className="delivery">
       <p className="Doption">DELIVERY OPTION </p>
       <p className="bus">  <BsTruck size="20"/> </p>      

      </div>

  <div className="input-group mb-3" >
    <input type="text" 
    className="form-control" 
    placeholder="Enter Pincode" 
    aria-label="Recipient's username" 
    ref={pincodeElement}
    aria-describedby="button-addon2"
    onChange={handleChecks} 
    
    maxLength="6"/>
    

      {
        isValid == false ?
        <button className= { checks ? 'btn btn-outline-secondary': ' btn yes' }
    type="button" id="button-addon2"    
    onClick={handleCheck}>check</button>
     :
    <button className="btn btn-outline-secondary" 
    type="button" id="button-addon2"    
    onClick={handleChange}>change</button>
    
      }
      <p id="pincodeInfo">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
   
    </div>  

    <div className="afterValidPin">
      {
        isValid ?  
        <div>
          <p>Get it by Sun, Aug 04</p>
          <p>Pay on delivery available</p>
          <p>Easy 14 days return available</p>
          <hr />
        </div> 
        :   
        <hr/>
      }
    </div>

    <div className="deliveryInstructions">
      <p>100% Original Products</p>
      <p>Pay on delivery might be available</p>
      <p>Easy 14 days returns and exchanges</p>
    </div>
      
    </div>


  </div>
  <div className="row">
    <div className="col">
      1 of 3
    </div>
    <div className="col">
      2 of 3
    </div>
    <div className="col">
      3 of 3
    </div>
  </div>
</div>
    </>
}

export default ItemDescription;