import { useEffect, useState } from "react";

const Banners=({bannerName})=>{

    // const [itemBanner,setItemBanner]=useState("home");

    // const setBanner=()=>{
    //     setItemBanner(bannerName);
    // }
    
    useEffect(() => {
        
      }, []); 
    return <>

    {
        bannerName==='home' && <img className="bannerImage" src="https://www.bandhanbank.com/sites/default/files/2021-04/Bandhan_Myntra_Offer_Banner_02.jpg" alt="Sale.." />
    }

    {
        bannerName==='women' &&  <img className="bannerImage" src="https://i.pinimg.com/originals/e6/a2/f9/e6a2f9f302b77a0062420cc498e5cd1a.jpg" alt="Fashionnn.." />

    }

    {
        bannerName==='men' &&   <img className="bannerImage" src="https://i.pinimg.com/originals/6f/66/29/6f66290a7db1fb8b61ff90529435d5be.jpg" alt="Fashionnn.." />
    }
    {
        bannerName==='kids' &&   <img className="bannerImage" src="https://assets.indiadesire.com/images/myntra%20kids%20fest-.jpg" alt="Fashionnn.." />
    }
    {
        bannerName==='homeAndLiving' &&   <img className="bannerImage" src="https://i.pinimg.com/originals/6f/66/29/6f66290a7db1fb8b61ff90529435d5be.jpg" alt="Fashionnn.." />
    }
    {
        bannerName==='beauty' &&   <img className="bannerImage" src="https://i.pinimg.com/originals/6f/66/29/6f66290a7db1fb8b61ff90529435d5be.jpg" alt="Fashionnn.." />
    }
    </>
}


export default Banners;

