import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import Banners from "../components/Banners";

const MenSection=()=>{


    const MenItems=useSelector((store)=>store.mensItems);
    const bannerName='men';
    return <>
   <main>
    <Banners bannerName={bannerName}></Banners>
    <div className="items-container">
            {
            MenItems.map((ITM)=>(
                <HomeItem item={ITM}  key={ITM.id}></HomeItem>
            ))         

            }
        </div>

   </main>
    </>

}

export default MenSection;