import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { useRef, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { wishListActions } from "../store/WishListSlice";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const HomeItem=({item})=>{

    const dispatch=useDispatch();    
    const bagItems=useSelector((store)=>store.bag);
    const wishListItems=useSelector((store)=>store.wishList);

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


    const handleAdd=()=>{       
        
        
        dispatch(bagActions.addToBag(item.id));
    }   

    const handleRemove=()=>{
    
        
        dispatch(bagActions.removeFromBag(item.id));
    }

    const handleLike=()=>{    

        if(finalItemStatus2()){
            
          dispatch(wishListActions.removeFromWishList(item.id));
        }
        else{
           
          dispatch(wishListActions.addToWishList(item.id)); 
        }   
    }


    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/itemdescription', { state: { item} });
      };
    

    return (
        <>
        
    <div className="item-container"  >
        
            <div className="ss" onClick={handleClick}>
    <img className="item-image" src={item.image} alt="item image"/>
    </div>
    <div className="flexing">
    <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    
    <div className="LikeButton"> 
       { 
       finalItemStatus2()===false?
    <IoMdHeartEmpty size={20} id="heart" onClick={handleLike}/>:
   <img src="/images/heart.png"  onClick={handleLike} width={"18px"} alt="Liked" />
        }
    </div>
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>

    {
        finalItemStatus()===true ?
    
    <button type="button" className="btn-add-bag remove" onClick={handleRemove}>< CiSquareRemove size={25}/> Remove From Bag</button>
        :
    <button className="btn-add-bag " onClick={handleAdd}> <MdOutlineAddBox size={25}/> Add to Bag</button>
    }
  </div>
  </>
    )
}
export default HomeItem;
