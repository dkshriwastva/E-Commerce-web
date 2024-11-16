import React from 'react'
import CartRow from "./CartRow"
import {useSelector , useDispatch} from "react-redux";
import {clearCart, AscendingRating, DesecndingRating} from '../Store/CartSlice';
//import theme from "./ThemeContext"
const Cart = () => {

  let cartData = useSelector((store)=>store.cart.cart)
  let dispatch = useDispatch();
  return (
    
      <div className="overflow-x-auto ml-10 mr-10 ">
  <table className="table">
   
    <thead>
      <tr className=' text-4xl'>
        
        <th>image</th>
        <th> <span onClick={()=>{dispatch(AscendingRating())}}>🔼</span>rating <span onClick={()=>{dispatch(DesecndingRating())}} >🔽</span></th>
        <th>price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      cartData.map((cartObj)=><CartRow obj={cartObj}></CartRow>)
    }
      
      
    </tbody>
   
  </table>
  <button className="btn btn-block btn-outline btn-error" onClick={()=> dispatch(clearCart())}>Clear Cart</button>
</div>

      
  );
};

export default Cart
