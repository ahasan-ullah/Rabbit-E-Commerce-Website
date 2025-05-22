import { Link } from "react-router-dom";
import {HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight} from 'react-icons/hi2';
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react"
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen,setDrawerOpen]=useState(false);
  const [navDrawOpen,setNavDrawOpen]=useState(false);

  const toggleCartDrawer=()=>{
    setDrawerOpen(!drawerOpen);
  }

  const toggleNavDrawer=()=>{
    setNavDrawOpen(!navDrawOpen);
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* left logo */}
        <div className="text-2xl font-medium">
          <Link to={"/"} className="text-2xl font-medium">Rabbit</Link>
        </div>
        {/* center navigation link */}
        <div className="hidden md:flex space-x-6">
          <Link to={'/collection/all'} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Men</Link>
          <Link to={'#'} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Women</Link>
          <Link to={'#'} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Top Wear</Link>
          <Link to={'#'} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Bottom Wear</Link>
        </div>
        {/* right section */}
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
          <HiOutlineUser className="h-6 w-6 text-gray-700"></HiOutlineUser></Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black cursor-pointer">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"></HiOutlineShoppingBag>
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full py-0.5 px-2">4</span>
          </button>
          {/* search */}
          <SearchBar></SearchBar>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}></CartDrawer>

      {/* mobile navigation */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawOpen?"translate-x-0":"-translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600"></IoMdClose>
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link onClick={toggleNavDrawer} to={"#"} className="block text-gray-600 hover:text-black">
            Men</Link>
            <Link onClick={toggleNavDrawer} to={"#"} className="block text-gray-600 hover:text-black">
            Women</Link>
            <Link onClick={toggleNavDrawer} to={"#"} className="block text-gray-600 hover:text-black">
            Top Wear</Link>
            <Link onClick={toggleNavDrawer} to={"#"} className="block text-gray-600 hover:text-black">
            Bottom Wear</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar