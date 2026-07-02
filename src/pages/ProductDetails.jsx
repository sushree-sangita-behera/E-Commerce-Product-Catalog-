import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <Link
        to="/"
        className="text-blue-600 font-semibold"
      >
        ← Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-3">
            Category: {product.category}
          </p>

          <p className="text-3xl font-bold text-green-600 mt-5">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-700 leading-7">
            This is a premium quality {product.name}. It is
            designed with modern materials, excellent build
            quality, and is suitable for everyday use.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;