import { useState } from "react";
import { useNavigate } from "react-router-dom"
import PayPalButton from "./PayPalButton";

const cart={
  products:[
    {
      name: "Stylish Jacket",
      size: "M",
      color: 'Black',
      price: 120,
      image: "https://picsum.photos/150?random=1"
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: 'White',
      price: 75,
      image: "https://picsum.photos/150?random=2"
    },
  ],
  totalPrice: 195,
}
const Checkout = () => {
  const navigate=useNavigate();
  const [checkoutId,setCheckoutId]=useState(null);
  const [shippingAddress,setShippingAddress]=useState({
    firstName: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  })


  const handleCreateCheckout=(e)=>{
    e.preventDefault()
    setCheckoutId(123);
  }

  const handlePaymentSuccess=(details)=>{
    console.log("Payment Success",details);
    navigate('/order-confirmation');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" value={"user@example.com"} className="w-full p-2 border rounded" disabled/>
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 block">
                First Name
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, firstName:e.target.value})} type="text" value={shippingAddress.firstName} className="w-full p-2 border rounded" required/>
            </div>
            <div>
              <label className="text-gray-700 block">
                Last Name
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, lastName:e.target.value})} type="text" value={shippingAddress.firstName} className="w-full p-2 border rounded" required/>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block">
                Address
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, lastName:e.target.value})} type="text" value={shippingAddress.address} className="w-full p-2 border rounded" required/>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 block">
                City
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, city:e.target.value})} type="text" value={shippingAddress.city} className="w-full p-2 border rounded" required/>
            </div>
            <div>
              <label className="text-gray-700 block">
                Postal Code
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, postalCode:e.target.value})} type="text" value={shippingAddress.postalCode} className="w-full p-2 border rounded" required/>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block">
                Country
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, country:e.target.value})} type="text" value={shippingAddress.country} className="w-full p-2 border rounded" required/>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block">
                Phone Number
              </label>
              <input onChange={(e)=>setShippingAddress({...setShippingAddress, phone:e.target.value})} type="tel" value={shippingAddress.address} className="w-full p-2 border rounded" required/>
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button type="submit" className="w-full bg-black text-white py-3 rounded cursor-pointer">Continue to Payment</button>
            ):(
              <div className="">
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                {/* paypal component */}
                <PayPalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err)=>{alert('Payment Failed. Try again later')}}></PayPalButton>
              </div>
            )}
          </div>
        </form>
      </div>
      {/* right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {
            cart?.products.map((product,index)=>
              (
                <div key={index} className="flex items-start justify-between py-2 border-b">
                  <div className="flex items-start">
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"/>
                    <div>
                      <h3 className="text-md">{product.name}</h3>
                      <p className="text-gray-500">{product.size}</p>
                      <p className="text-gray-500">{product.color}</p>
                    </div>
                  </div>
                  <p className="text-xl">${product.price?.toLocaleString()}</p>
                </div>))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout