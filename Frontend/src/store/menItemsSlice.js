import { createSlice} from "@reduxjs/toolkit";


const menItemSlice=createSlice({

    name:'mensItems',
    initialState:[],
    reducers:{
        addItems:(store ,action)=>{
            return action.payload;
        }
    }
})


export const menItemsActions=menItemSlice.actions;

export default menItemSlice;
