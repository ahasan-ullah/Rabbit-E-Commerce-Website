const selectedProducts={
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  descrption: "A stylish jacket made from high-quality materials. Perfect for any occasion.",
  brand: "Fashion Brand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      alt: "Stylish Jacket 1"
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      alt: "Stylish Jacket 2"
    },
  ]
}
const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProducts.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img src={selectedProducts.images[0]?.url} alt="Main Product" className="w-full h-auto object-cover rounded-lg"/>
            </div>
          </div>
          {/* mobile images */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {
              selectedProducts.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt || `Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              ))
            }
          </div>
          {/* right */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProducts.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {
                selectedProducts.originalPrice && `$${selectedProducts.originalPrice}`
              }
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProducts.price}
            </p>
            <p className="text-gray-600 mb-4">
              {selectedProducts.descrption}
            </p>
            <div className="mb-4">
              <p className="text-gray-700">
                Color:
              </p>
              <div className="flex gap-2 mt-2">
                {selectedProducts.colors.map((color) => (
                  <button
                    key={color}
                    className={'w-8 h-8 rounded-full border'}
                    style={{ backgroundColor: color.toLowerCase(),
                    filter: 'brightness(0.5)'}}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProducts.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 bg-gray-200 text-lg rounded">-</button>
                <span className="text-lg">1</span>
                <button className="px-2 bg-gray-200 text-lg rounded">+</button>
              </div>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">ADD TO CART</button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characterstics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProducts.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProducts.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails