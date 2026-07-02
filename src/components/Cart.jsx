function Cart({ cart, increase, decrease, removeItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-5">

      <h2 className="text-2xl font-bold mb-5 flex items-center justify-between">
        🛒 Shopping Cart
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {cart.length}
        </span>
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-10">

          <div className="text-6xl mb-4">🛒</div>

          <h3 className="text-lg font-semibold text-gray-700">
            Your cart is empty
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add some amazing products.
          </p>

        </div>
      ) : (
        <>
          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="border rounded-xl p-3 shadow-sm"
              >

                <div className="flex gap-3">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">

                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-green-600 font-semibold">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-2 mt-3">

                      <button
                        onClick={() => decrease(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        −
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increase(item.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-xl font-bold">

            <span>Total</span>

            <span className="text-green-600">
              ₹{total}
            </span>

          </div>

          <button
            className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Proceed to Checkout
          </button>

        </>
      )}

    </div>
  );
}

export default Cart;