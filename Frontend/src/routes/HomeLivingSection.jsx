import { useSelector } from "react-redux";
import Banners from "../components/Banners";
import HomeItem from "../components/HomeItem";

const HomeLivingSection=()=>{

    const homeAndLivingItems=useSelector((store)=>store.homeAndLiving);
    const bannerName='homeAndLiving';


    return <><main>
    <Banners bannerName={bannerName}></Banners>
    <div className="items-container">
            {
            homeAndLivingItems.map((ITM)=>(
                <HomeItem item={ITM}  key={ITM.id}></HomeItem>
            ))         

            }
        </div>

   </main>
    </>

}

export default HomeLivingSection;