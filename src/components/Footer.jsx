const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
       
        <div>
          <h2 className="text-xl font-bold mb-3">MiniShop</h2>
          <p className="text-sm text-blue-200">
            Your trusted online store for quality products at affordable prices.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-blue-200">
            <a className="hover:text-white cursor-pointer" href="/">Home</a>
            <a className="hover:text-white cursor-pointer" href="/cart">Cart</a>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-blue-200 text-sm">Email: yaredgebre120@gmail.com</p>
          <p className="text-blue-200 text-sm">Phone: +251 942 750 305</p>
        </div>

      </div>

      <div className="text-center text-blue-300 text-sm py-4 border-t border-blue-600">
        © {new Date().getFullYear()} MiniShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;