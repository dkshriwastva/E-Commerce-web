import React from "react";

const AddedCartCard = (Component) => {
  return (props) => {
    return <div className = 'relative'> 
        <div className="bg-orange-400 h-8 w-40 rounded-3xl p-1 text-black text-center font-bold absolute z-30 top-5 ml-5">Added to Cart💝</div> 
        <Component  {...props}> </Component>
    </div>;
  };
};

export default AddedCartCard;
