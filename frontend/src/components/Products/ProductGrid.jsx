import { Link } from "react-router-dom"

const ProductGrid = ({products}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {
        products.map((product,index) => (
          <div key={index} className="p-4">
            <Link key={index} to={`/product/${product._id}`}></Link>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-full h-96 mb-4">
                <img src={product.images[0].url} alt={product.images[0].alt ||product.name} 
                className="w-full h-full object-cover rounded-lg"/>
              </div>
              <h3 className="text-sm mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm font-medium tracking-tighter">${product.price}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductGrid