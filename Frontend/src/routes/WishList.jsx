import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";
import { IoMdPerson } from "react-icons/io";

const WishList=()=>{


    const items=useSelector((store)=>store.items);    
    const wishListItems=useSelector((store)=>store.wishList);

    
    
    const finalItems=items.filter(item=>{
        const itemIndex=wishListItems.indexOf(item.id);
      
          return itemIndex>=0;
        });


    return (
        <>
        <div className="WishListContainer">
        
           
          
        <div className="PersonalInfo">
          <div className="cont1"> 
            <div className="profile">
            <IoMdPerson size={60}/>
            </div>
            <div className="profileInfo">Hello,
            <div className="nameOfUser">Niranjan Alase</div>
            </div>            
            </div>


          
            <div className="accountSettings">
            <ul class="menues">
                <center><h6>ACCOUNT SETTINGS</h6></center>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>           
            <li class="new-feature">Myntra Insider </li>

            <hr />

            <center><h6>PAYMENTS</h6></center>
            <li>Myntra Credit</li>
            <li>Coupons</li>
            <li>Saved Cards</li>
            
        </ul>
            </div>
            <div className="Payments">
                <center><h6>LOGOUT</h6></center>
            </div>
            </div>
          
           <div className="wishlists">
            <div className="likedItems">

                {
                    
                   finalItems.length===0? <div className="message"><center><p> Your Wishlist Is Empty.</p></center></div>: 
                   
                   finalItems.map(Item => <WishListItem Item={Item} key={Item.id} /> )
                }
            
            </div>

           </div>
        </div>

        
        </>
    )
}

export default WishList;