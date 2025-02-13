import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";
import menItemSlice from "./menItemsSlice";
import womenItemsSlice from "./womenItemsSlice";
import kidsItemsSlice from "./kidsItemsSlice";
import homeAndLivingSlice from "./homeAndLiving";
import WishList from "../routes/WishList";
import WishListSlice from "./WishListSlice";
import storiesSlice, { storiesAction } from "./Stories";
import influencersPicSlice from "./InfluencersPIc";
import authSlice from "./authSlice";
import sellerSlice from "./sellerSlice";


const myntraStore=configureStore({reducer:{
    items:itemSlice.reducer,
    fetchStatus:FetchStatusSlice.reducer,
    bag:bagSlice.reducer,
    mensItems:menItemSlice.reducer,
    womenItems:womenItemsSlice.reducer,
    kidsItems:kidsItemsSlice.reducer,
    homeAndLiving:homeAndLivingSlice.reducer,
    wishList:WishListSlice.reducer,
    stories:storiesSlice.reducer,
    influencersPic:influencersPicSlice.reducer,
    auth:authSlice.reducer,
    seller:sellerSlice.reducer
}
});

export default myntraStore;