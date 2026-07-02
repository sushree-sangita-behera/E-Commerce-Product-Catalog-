function Navbar({ cartCount }) {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold tracking-wide">
            🛍️ ShopEase
          </h1>

          <p className="text-sm text-blue-100">
            React E-Commerce Store
          </p>

        </div>

        <div className="flex items-center gap-6">

          <button className="hover:text-yellow-300 transition">
            Home
          </button>

          <button className="hover:text-yellow-300 transition">
            Products
          </button>

          <button className="hover:text-yellow-300 transition">
            Contact
          </button>

          <div className="relative">

            <span className="text-3xl">
              🛒
            </span>

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;