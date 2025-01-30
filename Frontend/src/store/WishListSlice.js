import { createSlice } from "@reduxjs/toolkit";


const WishListSlice=createSlice({
    name:'wishList',
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
           
            state.push(action.payload);
           
        },        
        removeFromWishList:(state,action)=>{
            
            return state.filter(itemId=>itemId!==action.payload);
        }
    }
});


export const wishListActions=WishListSlice.actions;

export default WishListSlice;