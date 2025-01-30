import { createSlice} from "@reduxjs/toolkit";
import {DEFAULT_ITEMS} from "../data/items.js"

const FetchStatusSlice=createSlice({
    name:'fetchStatus',
    initialState:{
        fetchDone:false,
        currentlyFetching:false
    } ,
    reducers:{
         markFetchDone:(state)=>{
              state.fetchDone=true;

         },

         markFetchingStarted:(state)=>{

             state.currentlyFetching=true;
         },

         markFetchingFinish:(state)=>{
            
             state.currentlyFetching=false;
         }
    }
});


export const fetchStatusActions=FetchStatusSlice.actions;

export default FetchStatusSlice;