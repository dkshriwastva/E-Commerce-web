import React , {useState , useEffect} from 'react'

const useProductData = (id) => {

    let [data, setData] = useState(null);
  let ProductData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let ProductData = await data.json();
    setData(ProductData);
  };
  useEffect(() => {
    ProductData();
  }, []);

return data ;

}
export default useProductData
