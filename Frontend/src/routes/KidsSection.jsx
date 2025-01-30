import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import Banners from "../components/Banners";

const KidsSection=()=>{


    const kidsItems=useSelector((store)=>store.kidsItems);
    const bannerName='kids';
    return <>
    <main>
    <Banners bannerName={bannerName}></Banners>
    <div className="items-container">
            {
            kidsItems.map((ITM)=>(
                <HomeItem item={ITM}  key={ITM.id}></HomeItem>
            ))         

            }
        </div>

   </main>
    </>

}

export default KidsSection;