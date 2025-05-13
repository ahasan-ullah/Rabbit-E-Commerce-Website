import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

const FilterSidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const [filters,setFilters]=useState({
    category:"",
    gender:"",
    color:"",
    size:[],
    material:[],
    brand:[],
    minPrice:0,
    maxPrice:100,
  });

  const [priceRange,setPriceRange]=useState([0,100]);
  const categories=["Top Wear","Bottom Wear"];
  const colors=["Red","Blue","Black","Green","Yellow","Gray","White","Pink","Beige","Navy"];
  const sizes=["XS","S","M","L","XL","XXL"];
  const materials=["Cotton","Denim","Polyester","Wool","Silk","Linen","Viscose","Fleece"];
  const brands=["Urban Threads","Modern Fit","Street Style","Beach Breeze","Fashionista","ChicStyle"];
  const genders=["Men","Women"];

  useEffect(()=>{
    const params=Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size?params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand?params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([params.minPrice || 0,params.maxPrice || 100]);
  },[searchParams])

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {
          categories.map((category) => (
            <div key={category} className="flex items-center mb-1">
              <input
                type="radio"
                id={category}
                name="category"
                className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">
                {category}
              </span>
            </div>
          ))
        }
      </div>

      {/* gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {
          genders.map((gender) => (
            <div key={gender} className="flex items-center mb-1">
              <input
                type="radio"
                id={gender}
                name="gender"
                className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">
                {gender}
              </span>
            </div>
          ))
        }
      </div>
      
      {/* colors */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {
            colors.map((color) => (
              <button key={color} name="color" className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105" style={{background: color.toLocaleLowerCase()}}></button>
            ))
          }
        </div>
      </div>

      {/* size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {
          sizes.map((size) => (
            <div key={size} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="size"
                className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
              />
              <span className="text-gray-700">
                {size}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FilterSidebar