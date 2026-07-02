function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">

      {/* Product Image */}
      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          20% OFF
        </span>

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100 transition">
          ❤️
        </button>

      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {product.category}
        </span>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {product.name}
        </h2>

        {/* Ratings */}
        <div className="flex items-center mt-2">

          <span className="text-yellow-400 text-lg">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="text-gray-500 text-sm ml-2">
            (4.8)
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">

          <p className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </p>

          <span className="line-through text-gray-400">
            ₹{Math.round(product.price * 1.2)}
          </span>

        </div>

        {/* Free Delivery */}
        <p className="text-green-600 text-sm mt-2 font-medium">
          🚚 Free Delivery
        </p>

        {/* Add To Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;