import React , {useContext} from 'react'
import {ThemeStore} from "./ThemeContext";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"

const Navbar = () => {

  const {theme , setTheme} = useContext(ThemeStore);

  const cartData = useSelector((store)=> store.cart.cart);

  let lightTheme = "navbar bg-red-500  text-primary-content max-w-full text-2xl";
    let darkTheme = "navbar bg-red-700 text-primary-content max-w-full text-2xl";
    let themeChange = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
  return (
   <>

   <div className={theme == "light" ? lightTheme : darkTheme}>
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-5xl ">OneShop  </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li>
        <Link to="/Cart" className='text-2xl'>{" "}Cart<sup>{cartData.length}</sup></Link>
        </li>

      <li>
        <Link to="/Profile" className="text-2xl ">Profile</Link>
      </li>
      <li> 
        <Link to="/About" className="text-2xl ">About</Link>
      </li>
        
        <li>
          <Link to="/Food" className="text-2xl bg-black text-orange-500">Food</Link>
        </li>
      <li>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                onChange={themeChange}
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>

    
    </ul>
  </div>
</div>


   </>
  )
}

export default Navbar
