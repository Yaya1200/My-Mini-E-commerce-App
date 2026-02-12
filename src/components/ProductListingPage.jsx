import { useGetProductsQuery } from "../featchers/products/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../featchers/cart/cartSlice";

const ProductPage = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>${product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;