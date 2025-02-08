import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    isLoading:false,
    errorMessage:[]
}

export const fetchSellerProducts=createAsyncThunk('seller/fetchSellerProducts',async()=>{
    const token=localStorage.getItem("token");
          const response=await fetch("http://localhost:3000/api/seller/products",{
      headers:{
        Authorization:`Bearer ${token}`,
      }
    });

    const body=await response.json();
    if(response.status!==200){
        throw new Error(body.message||"Failed to fetch products");
    };
    return body;
});

const sellerSlice = createSlice({
  name: "seller",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending,(state,action)=>{
        state.isLoading=true;
    });
    builder.addCase(fetchSellerProducts.fulfilled,(state,action)=>{
        state.isLoading=false;
        console.log(action.payload.products);
        state.products=action.payload.products;
    });
    builder.addCase(fetchSellerProducts.rejected,(state,action)=>{
        state.isLoading=false;
        state.errorMessage=action.error.message
  });
  },
});


export const sellerActions=sellerSlice.actions;
export default sellerSlice;