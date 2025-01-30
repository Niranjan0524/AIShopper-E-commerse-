import { useSelector } from "react-redux";

const BagSummary=()=>{

  

    const bagItems=useSelector((state)=>state.bag);
    const items=useSelector((state)=>state.items);

    const finalItems=items.filter(item=>{
      const itemIndex=bagItems.indexOf(item.id);
  
      return itemIndex >= 0;
    });
    

   const totalMrp=()=>{
    let totalMRP=0;
    for(let i=0;i<bagItems.length;i++){
     
      totalMRP+=finalItems[i].original_price;
    }
    return totalMRP;
   }

   const totalDiscount=()=>{
    let totalDisAmount=0;
    for(let i=0;i<bagItems.length;i++){

      totalDisAmount+=finalItems[i].original_price - finalItems[i].current_price;

    }
    return totalDisAmount;
   }


   const finalPayment=()=>{
        let rs=0;
    if(totalMrp()){
        rs=totalMrp()-totalDiscount()+99;
      return rs;
    }
    else{
      return rs;
    }
   }
   

    const bagSummary={
        totalItem:bagItems.length,
        totalMRP:totalMrp(),
        totalDiscount:totalDiscount(),
        finalPayment:finalPayment(),
    }
    // hello
    return (
    
        <div className="bag-summary">
    
        
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">
        {bagItems.length===0 ? 0 :99 }
      </span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment()}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    )
}

export default BagSummary;