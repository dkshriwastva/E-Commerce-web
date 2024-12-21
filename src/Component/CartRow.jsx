import React from 'react'
import { useDispatch } from 'react-redux';
import {removeCart ,QunatityDecrease, QunatityIncrease} from '../store/CartSlice';

const CartRow = ({obj}) => {
  let{ quantity , data} =obj;
  let {thumbnail, rating , price, title , id  } = data;

  let dispatch = useDispatch();


  return (
   
    <tr>
        
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-24 w-28">
            <img
              src={thumbnail}
              alt="Avatar Tailwind CSS Comp"
              className="w-full h-full bg-white" />
          </div >
        </div>
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </div>
    </td>
    <td>
     ⭐{rating}
      <br />
      
    </td>
    <td>${price}</td>
    <td><span onClick={()=>dispatch(QunatityIncrease(id))}>🔼</span>{quantity}<span onClick={()=> dispatch(QunatityDecrease(id))}>🔽</span></td>
    <th>
      <button className="btn btn-outline btn-error" onClick={()=> dispatch(removeCart(id))} >Remove</button>
    </th>
  </tr>
  )
}

export default CartRow
