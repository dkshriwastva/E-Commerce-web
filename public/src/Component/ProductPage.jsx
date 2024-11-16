import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeStore } from "./ThemeContext.jsx";
import useProductData from "./useProductData";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Store/CartSlice";
const ProductPage = () => {
  const { id } = useParams();
  const [openIdx, setOpenIdx] = useState(null);

  const { theme, setTheme } = useContext(ThemeStore);

  let cartData = useSelector((store) => store.cart.cart);

  let inCart = () => {
    let Itemidx = cartData.findIndex((cartObj) => {
      return cartObj.data.id == id;
    });
    //console.log(idx)
    if (Itemidx === -1) {
      return false;
    } else {
      return true;
    }
  };

  let data = useProductData(id); //custom hook
  let dispatch = useDispatch();
  if (data == null) {
    return (
      <div>
        <div className="skeleton h-96 w-full"></div>
      </div>
    );
  }

  let { thumbnail, title, price, category, rating, reviews, description } =
    data;
  return (
    <div className="w-screen , h-screen relative">
      {inCart() == true ? (
        <div className="bg-orange-400 h-8 w-40 rounded-3xl p-1 text-black text-center font-bold absolute z-30 top-5 ml-5">
          Added to Cart💝
        </div>
      ) : null}
      <div>
        <div className="card card-side shadow-xl  m-4">
          <figure>
            <img src={thumbnail} />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{title}</h2>
            <p>price : ${price}</p>
            <p>Rating : {rating}</p>
            <p>Category : {category}</p>
            <p>Description : {description}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-error"
                onClick={() => dispatch(addCart(data))}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-3/4 h-1/2  mx-auto my-2 ">
        {reviews.map((review, idx) => {
          return (
            <Comment
              review={review}
              openIdx={openIdx}
              setOpenIdx={setOpenIdx}
              idx={idx}
            ></Comment>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
