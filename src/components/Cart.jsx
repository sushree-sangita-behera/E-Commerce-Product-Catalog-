function Cart({
  cart,
  increase,
  decrease,
  removeItem,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 sticky top-24">

      <h2 className="text-2xl font-bold mb-5">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-b py-4"
            >

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p className="text-green-600">
                ₹{item.price}
              </p>

              <div className="flex items-center gap-3 mt-3">

                <button
                  onClick={() => decrease(item.id)}
                  className="bg-gray-200 px-3 rounded"
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() => increase(item.id)}
                  className="bg-gray-200 px-3 rounded"
                >
                  +
                </button>

              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 mt-3"
              >
                Remove
              </button>

            </div>
          ))}

          <div className="mt-5">

            <h2 className="text-xl font-bold">
              Total: ₹{total}
            </h2>

            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
              Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;