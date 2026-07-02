import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";
import Footer from "./components/Footer";
import products from "./data/products";

function App() {
  // ==========================
  // State
  // ==========================
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // ==========================
  // Filter Products
  // ==========================
  let filteredProducts = products.filter((item) => {
    const matchesCategory =
      category === "All" || item.category === category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // ==========================
  // Sort Products
  // ==========================
  if (sortOrder === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // ==========================
  // Add To Cart
  // ==========================
  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // ==========================
  // Increase Quantity
  // ==========================
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ==========================
  // Decrease Quantity
  // ==========================
  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ==========================
  // Remove Item
  // ==========================
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-6">

        {/* Search + Filter + Sort */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <Filter
            setCategory={setCategory}
          />

          <Sort
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

        </div>

        {/* Products + Cart */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Product List */}
          <div className="lg:col-span-3">

            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />

          </div>

          {/* Cart */}
          <div>

            <Cart
              cart={cart}
              increase={increase}
              decrease={decrease}
              removeItem={removeItem}
            />

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;