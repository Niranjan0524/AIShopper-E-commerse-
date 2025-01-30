import { RiDeleteBin7Fill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { wishListActions } from "../store/WishListSlice";
const WishListItem=({Item})=>{
   
        const dispatch=useDispatch();
        const handleDeleteClicked=()=>{
            dispatch(wishListActions.removeFromWishList(Item.id));
            
          }
    
    return (<>
    <div className="itemLiked">
        <div className="pic">
            <img src={Item.image} alt="pic" id="likedPic" />

        </div>
        <div className="picInfo">
            
        <div className="nameOfPic">{Item.item_name}</div>
        <div className="price">
        <div className="rating">
        {Item.rating.stars} ⭐ | {Item.rating.count}

        </div>
        <div className="company-name">{Item.company}</div>
        <span className="current-price">Rs {Item.current_price}</span>
        <span className="original-price">Rs {Item.original_price}</span>
        <span className="discount">({Item.discount_percentage}% OFF)</span>
    </div>

        </div>
        
    <div className="remove-from-cart_2" onClick={handleDeleteClicked}><RiDeleteBin5Line size={20}/></div>
    </div>
    </>)
}


export default WishListItem;