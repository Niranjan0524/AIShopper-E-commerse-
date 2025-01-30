import { createSlice } from "@reduxjs/toolkit";

const bagSlice=createSlice({
    name:'bagSlice',
    initialState:[],
    reducers:{
        addToBag:(store,action)=>{           
            store.push(action.payload);
        },

        removeFromBag:(store,action)=>{
           return store.filter(itemId=>itemId!==action.payload);
        },
    }
})

export const bagActions=bagSlice.actions;

export default bagSlice;