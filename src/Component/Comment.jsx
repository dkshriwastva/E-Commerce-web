import React, { useState } from "react";

const Comment = ({ review, setOpenIdx, openIdx, idx }) => {
  const { rating, comment, reviewerName } = review;

  let [open, setOpen] = useState(false);
  let handleToggle = () => {
  setOpen(!open);
  }
  return (
    <div className="my-2">
      <div className="w-3/4  h-10 bg-red-500 text-black flex justify-around items-center text-2xl mx-auto mt-12">
        <span>{reviewerName}</span>{" "}
        <span onClick={handleToggle}>🔼</span>
      </div>
      {open == true ?
        <div className="w-3/4  h-10 bg-gray-600 text-white flex justify-around items-center text-2xl mx-auto mt-2">
          <span>{comment}</span> <span>{rating}</span>
        </div>: <></>}
      
    </div>
  );
};

export default Comment;
