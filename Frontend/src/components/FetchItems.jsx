import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemSlice";
import FetchStatusSlice, { fetchStatusActions } from "../store/FetchStatusSlice";
import {DEFAULT_ITEMS } from "../data/items.js"
import {DEFAULT_ITEMS_MEN } from "../data/menItems.js"
import { menItemsActions } from "../store/menItemsSlice.js";
import { womenItemsActions } from "../store/womenItemsSlice.js";
import { DEFAULT_ITEMS_WOMEN } from "../data/womenItems.js";
import { kidsItemsActions } from "../store/kidsItemsSlice.js";
import { DEFAULT_ITEMS_KIDS } from "../data/kidsItems.js";
import { homeAndLivingActions } from "../store/homeAndLiving.js";
import { DEFAULT_ITEMS_HOME_LIVING } from "../data/homeAndLiving.js";
import { storiesAction } from "../store/Stories.js";
import {STORIES} from "../data/stories.js"
import { influencersPicActions } from "../store/InfluencersPIc.js";
import { INFLUENCERS_PIC } from "../data/InfluencersPic.js";
const FetchItems=()=>{

    // const {currentlyFetching,fetchDone}=useSelector((store)=>store.fetchStatus);

    const dispatch=useDispatch();

//     useEffect(()=>{
//         // setFetching(true);
//         if(fetchDone==='Done') return;

//         const controller=new AbortController();
//         const signal=controller.signal;

//         dispatch(fetchStatusActions.markFetchingStarted())
//         fetch("http://localhost:8080/items",{signal})
//         .then((res) => res.json())
//         .then(({items}) => {      
//         dispatch(fetchStatusActions.markFetchingFinish());
//         dispatch(fetchStatusActions.markFetchDone());

        
//         dispatch(itemsActions.addinitialItems(items));
           
//         } ) ;

//         return ()=>{
         
//         //  controller.abort();
//         }
        
//  }, []); 

    dispatch(influencersPicActions.addPic(INFLUENCERS_PIC))
    dispatch(storiesAction.addStory(STORIES));
    dispatch(homeAndLivingActions.addItems(DEFAULT_ITEMS_HOME_LIVING));
    dispatch(womenItemsActions.addItems(DEFAULT_ITEMS_WOMEN));
    dispatch(menItemsActions.addItems(DEFAULT_ITEMS_MEN));
    dispatch(itemsActions.addinitialItems(DEFAULT_ITEMS));
    dispatch(kidsItemsActions.additems(DEFAULT_ITEMS_KIDS));

    return(
        <>
      
        </>
    )
}


export default FetchItems;

