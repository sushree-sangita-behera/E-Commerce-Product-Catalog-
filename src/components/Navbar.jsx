function Navbar({ cartCount }) {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Shopping Store
          </h1>

          <p className="text-sm text-gray-300">
            React E-Commerce Project
          </p>
        </div>

        <div className="bg-blue-600 px-4 py-2 rounded-lg font-semibold">
          🛒 Cart ({cartCount})
        </div>

      </div>
    </nav>
  );
}

export default Navbar;