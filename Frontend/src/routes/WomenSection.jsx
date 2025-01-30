import Banners from "../components/Banners";
import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";


const  WomenSection=()=>{

    const womenItems=useSelector((store)=>store.womenItems);
    const bannerName='women';

    return <>
     <main>
        <Banners bannerName={bannerName}></Banners>
        
        <div className="items-container">
            {
            womenItems.map((ITM)=>(
                <HomeItem item={ITM} itemStatus={ITM.addStatus} key={ITM.id}></HomeItem>
            ))         

            }
        </div>
    </main>
    </>

}

export default WomenSection;