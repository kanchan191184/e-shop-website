import Cart from "../../components/Cart/Cart";
import classes from "./CartPage.module.scss";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart();

  const navigate = useNavigate();

  // Handler for incrementing quantity
  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  // Handler for decrementing quantity
  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  const handleRemoveProduct = (productId, selectedVariant) => {
    removeFromCart(productId, selectedVariant);
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className={classes.cartContainer}>
      <h1 className={classes.cartHeading}>Cart</h1>
      <Cart
        cartItems={cart}
        handleContinueShopping={handleContinueShopping}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default CartPage;
