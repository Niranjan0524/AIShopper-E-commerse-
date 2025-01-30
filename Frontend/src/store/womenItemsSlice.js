import { createSlice } from "@reduxjs/toolkit";


const womenItemsSlice =createSlice({
    name:'womenItems',
    initialState:[],
    reducers:{
        addItems:(store,action)=>{
            return action.payload;
        }
    }
});



export const womenItemsActions=womenItemsSlice.actions;
export default womenItemsSlice;