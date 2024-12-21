import React, {Suspense , lazy} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContext from './Component/ThemeContext.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Profile from "./Component/Profile";
import Cart from "./Component/Cart";
import About from "./Component/About";
import Home from "./Component/Home";
let Food =lazy (()=> import('./Component/Food.jsx'));
import Product from "./Component/ProductPage.jsx";
import AppStore  from "./Store/Store.js";
import {Provider} from  "react-redux";
//import CartRow from "./Component/CartRow"
const AppRouter = createBrowserRouter ([
    { path: "/",
        element: <App></App>,
        children: [
    {
        path : "/",
        element: <Home></Home>
    },
    {
        path: "/Profile",
        element: <Profile></Profile>
    },
    {
        path: "/Cart",
        element: <Cart></Cart>
    },
    {
        path : "/About",
        element: <About></About>
    },
    {
        path: "/Food",
        element:<Suspense fallback ={<hi>Food page is coming</hi>}>
         <Food></Food>
         </Suspense>
    },
    {
        path: "/Product/:id",
        element : <Product></Product>
    }
     ]
 }
])
createRoot(document.getElementById('root')).render(
<Provider store={AppStore}>
    <ThemeContext>
     <RouterProvider router={AppRouter}> </RouterProvider> 
     </ThemeContext> </Provider>
    
  
)
