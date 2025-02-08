// import React, { Children } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './routes/App.jsx'
// import './index.css';
// import Bag from "./routes/Bag.jsx";
// import {RouterProvider,createBrowserRouter} from "react-router-dom";
// import Home from './routes/Home.jsx';
// import {Provider} from 'react-redux';
// import myntraStore from './store/index.js';
// import MenSection from './routes/MenSection.jsx';
// import WomenSection from './routes/WomenSection.jsx';
// import KidsSection from './routes/KidsSection.jsx';
// import HomeLivingSection from './routes/HomeLivingSection.jsx';
// import BeautySection from './routes/BeautySection.jsx';
// import StudioSection from './routes/Studio.jsx';
// import WishList from './routes/WishList.jsx';
// import Signup from './routes/Signup.jsx';
// import ItemDescription from './routes/ItemDescription.jsx';
// import SavedItems from './routes/SavedItems.jsx';
// import Login from './routes/Login.jsx';
// import AddProduct from './routes/AddProducts.jsx';
// import SellerProducts from './routes/SellerProducts.jsx';
// import SellerHome from './routes/sellerHome.jsx';

// import { useSelector } from 'react-redux';


// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[     
//       {path:"/",element:<Home/>,} ,
//       {path:"/bag",element:<Bag/>,},
//       {path:"/men",element:<MenSection/>},
//       {path:"/women",element:<WomenSection/>},
//       {path:"/kids",element:<KidsSection/>},
//       {path:"/homeandliving",element:<HomeLivingSection/>},
//       {path:"/beauty",element:<BeautySection/>},
//       // {path:"/studio",element:<StudioSection/>},
//       {path:"/wishlist",element:<WishList/>},
//       {path:"/signup",element:<Signup/>},
//       {path:"/itemdescription",element:<ItemDescription/>},
//       {path:"/login",element:<Login/>},
//     ]
//   },
//   {
    
//       path: "/studio",
//       element: <StudioSection />    
    
//   },
//   {
//       path:"/studio/savedItems",
//       element:<SavedItems/>
//   },
//   {
//     path:"/addProduct",
//     element:<AddProduct/>
//   },
//   {
//     path:"/products",
//     element:<SellerProducts/>
//   }

  
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <Provider store={myntraStore}>

//     <RouterProvider router={router}>
//     </RouterProvider>

//     </Provider>

// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/Bag.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import { Provider, useSelector } from "react-redux";
import myntraStore from "./store/index.js";
import MenSection from "./routes/MenSection.jsx";
import WomenSection from "./routes/WomenSection.jsx";
import KidsSection from "./routes/KidsSection.jsx";
import HomeLivingSection from "./routes/HomeLivingSection.jsx";
import BeautySection from "./routes/BeautySection.jsx";
import StudioSection from "./routes/Studio.jsx";
import WishList from "./routes/WishList.jsx";
import Signup from "./routes/Signup.jsx";
import ItemDescription from "./routes/ItemDescription.jsx";
import SavedItems from "./routes/SavedItems.jsx";
import Login from "./routes/Login.jsx";
import AddProduct from "./routes/AddProducts.jsx";
import SellerProducts from "./routes/SellerProducts.jsx";
import SellerHome from "./routes/sellerHome.jsx";

const Root = () => {
  const {userType} = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: userType === "seller" ? <SellerHome /> : <Home />,
        },
        { path: "/bag", element: <Bag /> },
        { path: "/men", element: <MenSection /> },
        { path: "/women", element: <WomenSection /> },
        { path: "/kids", element: <KidsSection /> },
        { path: "/homeandliving", element: <HomeLivingSection /> },
        { path: "/beauty", element: <BeautySection /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/signup", element: <Signup /> },
        { path: "/itemdescription", element: <ItemDescription /> },
        { path: "/login", element: <Login /> },
      ],
    },
    {
      path: "/studio",
      element: <StudioSection />,
    },
    {
      path: "/studio/savedItems",
      element: <SavedItems />,
    },
    {
      path: "/addProduct",
      element: <AddProduct />,
    },
    {
      path: "/products",
      element: <SellerProducts />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={myntraStore}>
    <Root />
  </Provider>
);