import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MiniShop
        </Link>

      
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-blue-200 transition">
            Home
          </Link>
          <Link to="/cart" className="hover:text-blue-200 transition flex items-center gap-2">
                <div className="flex items-center gap-2">
                <ShoppingCart size={24} />
                <span className="text-white font-bold">{totalQuantity}</span>
              </div>
            
          </Link>
        </nav>

       
        <Link to="/cart" className="md:hidden">
          <ShoppingCart size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;