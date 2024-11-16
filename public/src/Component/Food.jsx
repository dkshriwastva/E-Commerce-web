import React ,{useState} from 'react'
import Card from "./Card.jsx";
import ShimmerUi from "./ShimmerUi.jsx";

const Food = () => {
  const [Foodproducts, setFoodproducts] = useState([]);
  let getdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let productData = await data.json();

    setFoodproducts(FoodData.Foodproducts);
  };
  
  return (
    <div>

<div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIMfi-zEBO-O3Hpzvw7kWtm8eqDA_TFSbvw&s" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUNAZ1DQLJaZGjGKCAAzp9CNr0l2s1aR8Xw&s"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZiaUwn79mLR6Y2246PaiYLDT315IKbWagQ&s"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAViV3km0y3aqBhi3eb3cfcJZkfVoS15Lwg&s"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS916WwGKYposie8wK3_VYyal5Nes9AdnWmMw&s" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceNggaqVt1r9m7rW3uy1a6vHqAXtOzmpaDA&s" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG33Jw_WLfurC8idC1n-5SBSUv0YTcUmvsqA&s"
      alt="Drink" />
  </div>
</div>

      <p className="justify-center flex text-3xl bg"> This new feature is comming soon</p>
      {Foodproducts == 0 ? (
          <ShimmerUi> </ShimmerUi>
        ) : (
          Foodproducts.map((obj, idx) => {
            return <Card key={obj.id} productObj={obj}></Card>;
          })
        )}
    </div>
  )
}

export default Food
