import BagSummary from "../components/BagSummary.jsx";
import BagItem from "../components/BagItem.jsx";
import {useSelector} from "react-redux";
import ShowEmptyBagMessage from "../components/ShowEmptyBagMessage.jsx";


const Bag=()=>{

  const bagItems=useSelector((state)=>state.bag);
  const items=useSelector((state)=>state.items);
  const finalItems=items.filter(item=>{
  const itemIndex=bagItems.indexOf(item.id);

    return itemIndex>=0;
  });

 
return  (
        <>
<main>
      <div className="bag-page">
      {      
        
        bagItems.length == 0 ? 
        <ShowEmptyBagMessage/> 
        : 
        <BagSummary/>
      }
      
      { 
      bagItems.length == 0 ? 
      <p></p>:
      <div className="bag-items-container">
        { 
      finalItems.map(item=> <BagItem item={item} key={item.id}/>  ) 
      }
      </div> 
      }
      
  
    
    

  </div>
</main>

</>

    )
}

export default Bag;