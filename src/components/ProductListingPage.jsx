import { useGetProductsQuery } from "../featchers/products/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../featchers/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { data = [], isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;
  console.log(data)
  return (
    <div className="grid grid-cols-5 gap-2 ml-5">
      {data?.products?.map((product) => (
        <div className="grid-content" key={product.id}>
          <Link to={`/products/${product.id}`}>
          <img className="images" src={product.thumbnail} alt={product.title} />
          </Link>
          
          <p className="font-medium">{product.title}</p>

          <div className="container">
            
            product rating: {product.rating}
          </div>

          <p>product price ${(product.price)}</p>

          <button
            className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-500 transition"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;