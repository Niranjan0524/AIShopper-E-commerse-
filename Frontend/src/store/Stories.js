import { createSlice } from "@reduxjs/toolkit";


const storiesSlice=createSlice({
    name:'stories',
    initialState:[],
    reducers:{
        addStory:(state,action)=>{
            return action.payload;
        },

        removeStory:(state,action)=>{

        }


    }
});


export const storiesAction=storiesSlice.actions;

export default storiesSlice;