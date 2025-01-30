import { createSlice } from "@reduxjs/toolkit";


const homeAndLivingSlice=createSlice({
    name:'homeAndLiving',
    initialState:[],
    reducers:{

        addItems:(store,action)=>{
            return action.payload;
        }
    }
});

export const homeAndLivingActions=homeAndLivingSlice.actions;

export default homeAndLivingSlice;