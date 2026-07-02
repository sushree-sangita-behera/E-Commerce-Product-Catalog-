function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>

          <h2 className="text-2xl font-bold">
            🛍️ ShopEase
          </h2>

          <p className="text-gray-400 mt-3">
            A modern React E-Commerce Product Catalog
            built using React, Vite and Tailwind CSS.
          </p>

        </div>

        {/* Tech Stack */}
        <div>

          <h2 className="text-xl font-semibold mb-3">
            Tech Stack
          </h2>

          <ul className="space-y-2 text-gray-300">

            <li>⚛ React.js</li>
            <li>⚡ Vite</li>
            <li>🎨 Tailwind CSS</li>
            <li>📦 JavaScript (ES6)</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-xl font-semibold mb-3">
            Connect
          </h2>

          <div className="space-y-2 text-gray-300">

            <p>📧 your-email@gmail.com</p>

            <p>💼 LinkedIn</p>

            <p>🐙 GitHub</p>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">

        © 2026 ShopEase | Built with ❤️ using React & Tailwind CSS

      </div>

    </footer>
  );
}

export default Footer;