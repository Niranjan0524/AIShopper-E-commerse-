import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import Banners from "../components/Banners";


const Home=()=>{

    const Items=useSelector((store)=>store.items);
    
    const bannerName='home';

    
     

    return (
        <>
        
    <main>
    <Banners bannerName={bannerName}></Banners>
        
        <div className="items-container">
            {
            Items.map((ITM)=>(
                <HomeItem item={ITM} itemStatus={ITM.addStatus} key={ITM.id}></HomeItem>
            ))         

            }
        </div>
    </main>

        
        </>
    )
}


export default Home;