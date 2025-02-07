import {createSlice} from '@reduxjs/toolkit';


const initialState={
  isLoggedIn:localStorage.getItem('isLoggedIn') || false,
  token:localStorage.getItem('token') || null,
  userType:localStorage.getItem('userType') || null
}

const authslice=createSlice({
    name:'authSlice',
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
          console.log("inside login",action.payload);
            state.isLoggedIn=true;
            state.token=action.payload.token; 
            state.userType=action.payload.userType;
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('token',action.payload.token),
            localStorage.setItem('userType',action.payload.userType)
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.token=null;
            state.userType=null;
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('token'),
            localStorage.removeItem('userType')
      
        }
    }
})

export const authActions=authslice.actions;

export default authslice;