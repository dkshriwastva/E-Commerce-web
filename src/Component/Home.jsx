import { useState, useEffect, useContext } from "react";
//import productData from "../Data.js";
import Card from "./Card.jsx";
import ShimmerUi from "./ShimmerUi.jsx";
import { ThemeStore } from "./ThemeContext.jsx";
import {Link} from "react-router-dom";
import AddedCartCard from "./AddedCartCard.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const [allproducts, setallproducts] = useState([]);
  const [products, setproducts] = useState([]);
  const [query, setquery] = useState("");


  const { theme, setTheme } = useContext(ThemeStore);

  let cartItems = useSelector((store)=> store.cart.cart)

  let handleTopRated = () => {
    let filteredData = allproducts.filter((obj) => {
      return obj.rating > 4;
    });
    setproducts(filteredData);
  };
  const handleCategory = (category) => {
    const filteredData = allproducts.filter((obj) => {
      return obj.category == category;
    });
    setproducts(filteredData);
    
  };

  let handleSearch = () => {
    const filteredData = allproducts.filter((obj) => {
      return obj.title.toLowerCase().includes(query.toLowerCase().trim());
    });
    setproducts(filteredData);
    setquery("");
  };
  let getdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let productData = await data.json();

    setallproducts(productData.products);
    setproducts(productData.products);
  };
  useEffect(() => {
    getdata();
  }, []);

  //if (allproducts== null ){  //skeleton
  //return <ShimmerUi></ShimmerUi>

  //}
   let AddedCart = AddedCartCard(Card);

   let inCart =(id)=> {
   let Idx = cartItems.findIndex((cartObj)=> cartObj.data.id == id);
   if (Idx == -1 ) return false;
   return true;
   }
  return (
    <div className={theme == "light" ? "bg-blue-200" : "bg-black"}>
     <div>
      <div className="flex justify-around items-center w-full h-20">
        <button onClick={handleTopRated} className="btn btn-error">
          TopRated
        </button>
        <button
          className="btn btn-active btn-primary"
          onClick={() => {
            handleCategory("furniture");
          }}
        >
          Furniture
        </button>

        <div className="search flex justify-around items-center w-1/5">
          <input
            value={query}
            onChange={(e) => {
              setquery(e.target.value);
            }}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button className="btn btn-outline btn-primary ml-2" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button
          className="btn btn-active btn-secondary"
          onClick={() => {
            handleCategory("groceries");
          }}
        >
          Grocry
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => {
            handleCategory("beauty");
          }}
        >
          {" "}
          Beauty
        </button>
      </div>
    
      <div className="flex justify-around flex-wrap " >    
        <div className="carousel w-full h-40 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://cmsimages.ssbeauty.in/Arcelia_Top_carousal_Makeup_Desktop_2x_426263e3bd.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://realkart.in/images/home/slide-2.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0099/2867/1291/files/Carousal_Banners-1280_x_400_Desktop-05_b14be07e-ea38-4128-a537-bdd8aa3ae62e.jpg?v=1676452849&width=1700"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://akdoorsteps.com/admin/sliderImages//103de3f89e53c778b24a2a369d8bf7a4.png"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div> 


        {products == 0 ? (
          <ShimmerUi> </ShimmerUi>
        ) : (
          products.map((obj) => {
            return inCart(obj.id)==true ? <AddedCart key={obj.id} productObj={obj}></AddedCart>:<Card key={obj.id} productObj={obj}></Card> ;
          })
        )}
      </div>
    </div>
    </div>
  );
};

export default Home;
