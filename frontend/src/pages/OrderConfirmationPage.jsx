const checkout={
  _id: "12345",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },{
      productId: "2",
      name: "T-shirt",
      color: "Black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress:{
    address: '123 Fashion Street',
    city: "Dhaka",
    country: "Bangladesh",
  }
}
const OrderConfirmationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">Thank you for the order!</h1>

      {
        checkout && (
          <div className="p-6 rounded-lg border">
            <div className="flex justify-between mb-20">
              {/* order id and date */}
              <div>
                <h2 className="text-xl font-semibold">
                  Order ID: {checkout._id}
                </h2>
                <p className="text-gray-500">
                  Order date: {new Date(checkout.createdAt).toLocaleDateString()}
                </p>
              </div>
              {/* estimated delivery */}
              
            </div>
          </div>
        )
      }
    </div>
  )
}

export default OrderConfirmationPage