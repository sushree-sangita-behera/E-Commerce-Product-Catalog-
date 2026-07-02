function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />

        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          Bestseller
        </span>

      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {product.category}
        </p>

        <div className="mt-2 text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-2xl font-bold text-green-600 mt-3">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;