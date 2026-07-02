import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {

  if (products.length === 0) {
    return (

      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">

        <div className="text-7xl mb-5">
          🔍
        </div>

        <h2 className="text-3xl font-bold text-gray-700">

          No Products Found

        </h2>

        <p className="text-gray-500 mt-3">

          Try searching with another keyword or choose a different category.

        </p>

      </div>

    );
  }

  return (

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />

      ))}

    </div>

  );
}

export default ProductList;