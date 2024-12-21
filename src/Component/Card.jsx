import React, {useContext} from "react";
import {ThemeStore} from "./ThemeContext"
import {useNavigate} from 'react-router-dom';
import {addCart} from "../Store/CartSlice";
import {useDispatch} from "react-redux";

const Card = ({productObj}) => {
let dispatch = useDispatch();

let {title , price, rating, category, thumbnail, id} = productObj;  //Destructuring
  //let {image, name, cuisine, mealType}=productObj;
  //console.log(productObj);

    let {theme}=useContext(ThemeStore);

    let navigate = useNavigate();

    let handleNavigation = () => {
      navigate(`/product/${id}`)
    } 
  
    let handleAddCart = (event) => {
      console.log("1")
      
      dispatch(addCart(productObj));
      event.stopPropagation();
      console.log("2");
    }  
    let darkTheme ="card glass bg- w-96 shadow-xl m-4";
    let lightTheme ="card glass bg-red-600 w-96 shadow-xl m-4 text-black";
  return (
    <div>
      <div className={theme=="light"? lightTheme:darkTheme}
      onClick={handleNavigation}>
        <figure>
          <img
            className="bg-slate-200 rounded-full mt-4 "
            src={thumbnail } 
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p>Price :{price}</p>
          <p>Category :{category}</p>
          <p>Rating :{rating}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-blue-300 "  onClick={handleAddCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
