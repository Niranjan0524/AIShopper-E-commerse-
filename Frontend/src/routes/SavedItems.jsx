import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const SavedItems=()=>{


    return<>
    
    <div className="studioSection">
    <div className="container-md">
    <div className="  headerSec2">
    <div className=" firstStHalf2">
            <Link to="/"><GoArrowLeft size={23}/>  </Link>
            <Link to="/studio">Saved Posts</Link>
    </div>
   
    </div>
    <div className="savedImage">
        <img src="/images/studioSavedPic.jpg" className="savedPic" alt="" />
        <div className="ss"><center>No Saved posts</center></div>
        <div className="pp">
            <center>
                
            You have not saved anything as of now. Your saved post will appear here.
        
            </center>
        </div>
    </div>
    </div>
    </div>
    </>
}

export default SavedItems;