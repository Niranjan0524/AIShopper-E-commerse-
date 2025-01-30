import { createSlice } from "@reduxjs/toolkit";


const influencersPicSlice= createSlice({
    name:'influencersPic',
    initialState:[],
    reducers:{
        addPic:(state,action)=>{
            return action.payload;
        }
        
    }
});

export const influencersPicActions=influencersPicSlice.actions;

export default influencersPicSlice;