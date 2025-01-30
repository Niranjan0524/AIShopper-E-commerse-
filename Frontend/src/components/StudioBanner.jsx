import { FaAnglesRight } from "react-icons/fa6";

const StudioBanner=()=>{

    return <>
    <div className="sudioBanner hover_box2">
        <img src="/images/studioBanner.jpg" className="studioImage" alt="" />
        <div>
            <center>
        <button type="button" class="btn btn-outline-secondary studioButton">EXPLORE STUDIO <FaAnglesRight size="17"/> </button>
       </center>
        </div>
         </div>    
    </>
}

export default StudioBanner;