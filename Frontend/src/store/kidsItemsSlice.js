import { createSlice } from "@reduxjs/toolkit";


const kidsItemsSlice=createSlice({
    name:'kidsItems',
    initialState:[],
    reducers:{
        additems:(store,action)=>{
            return action.payload;
        }
    }
});


export const kidsItemsActions=kidsItemsSlice.actions;
export default kidsItemsSlice;