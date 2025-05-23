import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";

const CollectonPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef=useRef(null);
  const [isSidebarOpen,setIsSidebarOpen]=useState(false);

  const toggleSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleClickOutside=(e)=>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setIsSidebarOpen(false);
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleClickOutside);

    document.removeEventListener("mousedown",handleClickOutside)
  },[])

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              alt: "Product 1",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              alt: "Product 2",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              alt: "Product 3",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              alt: "Product 4",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              alt: "Product 5",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              alt: "Product 6",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              alt: "Product 7",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              alt: "Product 8",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    },1000);
  },[])
  return(
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="r-2"></FaFilter>Filters
      </button>
      {/* filter sidebar */}
      <div className={`${isSidebarOpen? "translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-x-auto transition-transform duration-300 lg:static lg: translate-x-0`} ref={sidebarRef}>
        <FilterSidebar></FilterSidebar>
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/*  */}
      </div>
    </div>
  );
};

export default CollectonPage;
