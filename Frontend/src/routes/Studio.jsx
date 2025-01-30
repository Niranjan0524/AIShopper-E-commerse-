import { Link } from "react-router-dom";
import { BiBookmarkAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { storiesAction } from "../store/Stories";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";//normal
import { FcLike } from "react-icons/fc";//red
import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineBookmarks } from "react-icons/md";
import { useEffect } from "react";
import { STORIES } from "../data/stories";
import { influencersPicActions } from "../store/InfluencersPIc.js";
import { INFLUENCERS_PIC } from "../data/InfluencersPic.js";


const StudioSection=()=>{


    const stories=useSelector((store)=>store.stories);
    
    const dispatch=useDispatch();

    const handleAddStory=()=>{
        console.log("add Story clicked");
    }

    const influencersPic=useSelector((store)=>store.influencersPic);



    useEffect(() => {
       if (!stories.length) {
        dispatch(storiesAction.addStory(STORIES));
        }

        if(!influencersPic.length){
            dispatch(influencersPicActions.addPic(INFLUENCERS_PIC));
        }
    }, [stories]);


    const [like,setLike] =useState(false);
    const handleLike=()=>{
        if(like){
            setLike(false);
        }
        else{
            setLike(true);
        }
    }




    return <>
    <div className="studioSection">
    <div className="container-md">
    <div className="headerSec">
        <div className="firstStHalf">
            <Link to="/"><FaArrowLeft size={23}/>  </Link>
            <Link to="/studio">Studio</Link>
        </div>
        <div className="nav_bar2">
            <Link to="/studio/savedItems" ><BiBookmarkAlt size={23}/></Link>
            <Link to="/studio"><IoSettingsOutline size={23}/></Link>
            <Link to="/studio"><IoMdSearch size={23} /></Link>
        </div>
    </div>

    
<div className="studioMessage">
       Check on what are they using...
    </div>

    <div className="stories">
    <div className="circle circle2" onClick={handleAddStory}>
          <IoIosAddCircleOutline size={30}/>
            <p className="addStory">Add Story</p>
   </div>

   {
    stories.map((item)=>
        <div className="circle" key={item.id} >
            <img src={item.image}/>
            <div className="label">{item.type}</div>
        </div>
    )
   }
    </div>


    <div className="influencersMessage">
        Follow Our Top Influencers...
    </div>

    <div className="influencers">
    <div className="influencersPicContainer">


        {
            influencersPic.map((item)=>
                <div className="picContainer">
                <img src={item.image} alt="" />
               <center>
               <p id="nameOfPic">{item.name}</p>
               <p id="picType">{item.type}</p>
               </center>
                </div>
            )
        }   
    </div>
    </div>

    <div className="gap">

    </div>
    <div className="post">
        <div className="headerOfPost">
            <p className="postimage">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s" className="profileImage" alt="" />
                {/* image.. */}
            </p>
            
            <div className="nameDiv">
            <div className="accountName">
                Kaira k

                </div>
            <div className="addedDate">
                3 days ago
            </div>
           
            </div>
            <div className="dot"> 
           < GoDotFill size={15}/>
            </div>
            <div className="followButton">
                Follow
            </div>         
        </div>
        <div className="actualPostImage">
            <img src="https://i.pinimg.com/736x/8e/8b/f2/8e8bf2699cf31ceb0de1cc12b77ffa6a.jpg"  alt="" />
        </div>
        <div className="productsToSale">
            <div className="shopAll">
           <div className="bagLogo"> <LuShoppingBag size={25}/></div>
           
           <div className="belowBagLogo">Shop All</div>
        </div>
            
            <div className="ProductsContainer">
                <div className="product">
                <div className="ProductImage">
                        <img src="https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14=" alt="" />
                    </div>
                    <div className="ProductDetails">
                        <div className="productName">Gujarati Bangles</div>
                        <div className="productPrice">
                            <div className="currPrice">$34</div>
                            <div className="origPrice">$56</div>
                        </div>
                        <div className="offAndRatingSection">
                            <div className="offer">15% OFF</div>
                            <div className="rating"> 4.4 </div>
                            <div className="star"><FaStar size={12}/></div>
                        </div>
                    </div>
                    
                </div>
                <div className="product">
                <div className="ProductImage">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rfbwIChNOB_kdGPDyfV0X38yzmIko5EPxA&s" alt="" />
                    </div>
                    <div className="ProductDetails">
                        <div className="productName"> Diamond Earings</div> 
                        <div className="productPrice">
                            <div className="currPrice">$333</div>
                            <div className="origPrice">$463</div>
                        </div>
                        <div className="offAndRatingSection">
                            <div className="offer">10% OFF</div>
                            <div className="rating"> 4.7 </div>
                            <div className="star"><FaStar size={12}/></div>
                        </div>
                    </div>
                    
                </div>
                <div className="product">No Item</div>
            </div>
        </div>

        <div className="reactionsDiv">
            <div className="leftSide">
                <div className="likeProduct">
                {
                    like==false ? <FaRegHeart onClick={handleLike} size={23}/> : < FcLike onClick={handleLike} size={25}/>
                }
                </div>
                <div className="shareProduct">
                    <FiShare2 size={23}/>
                </div>
            </div>
            <div className="rightSide">
            <MdOutlineBookmarks size={24}/>
            </div>
        </div>

        <div className="tagsAndPostInfo">
        Searching for the perfect accessory to enhance your minimal ensemble? Look no further than our trendy Zircon Kada - it's the ideal choice for effortlessly elevating your look.

        Find this sleek piece at Kushal's Fashion Jewellery on Myntra!
        <span className="tagsProduct">
                    
        #partyjewelry

        #kushalsfashionjewellery #zirconstudded #zirconjewellery

        #braceletkadas #zircons #womenbrands
        </span>

        </div>
    </div>
    <div className="gap">
       
    </div>
    <div className="post">
        
    </div>
   
    


    </div>
    </div>
    </>

}

export default StudioSection;