import classes from "./Cart.module.scss";
import Button from "../Button/Button";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RMr3YQWrAcdTLcLYITpM8U25t43sQ6KtoNX1My26HbjaOMvh26TDNZtx8tvo9MvZz4NxZrf2fbmQ5VS8ynlXrfq009QMMJ0Gn"
);

const Cart = ({
  cartItems,
  handleIncrement,
  handleDecrement,
  handleContinueShopping,
  handleRemoveProduct,
}) => {
  const processedCartItems = cartItems
    ? cartItems.filter((item) => item && item.id)
    : [];

  // Calculate total price and total products
  const totalProducts = processedCartItems.reduce(
    (sum, product) => sum + (product?.quantityAdded || 0),
    0
  );
  const totalPrice = processedCartItems.reduce(
    (sum, product) =>
      sum + (product?.quantityAdded || 0) * (product?.pricePerUnit || 0),
    0
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(
      "http://localhost:4242/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      }
    );

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  if (cartItems.length === 0) {
    return (
      <section className={classes.cartEmptyContainer}>
        <h4>Your cart is empty.</h4>
        <Button type="button" onClick={handleContinueShopping}>
          Continue Shopping
        </Button>
      </section>
    );
  }

  return (
    <section className={classes.cartContainer}>
      <header className={classes.header}>
        <h3>Item List</h3>
      </header>
      <main className={classes.cartContent}>
        {/* Left Section */}
        <section className={classes.leftSection}>
          {processedCartItems.map((product) => (
            <article
              key={`${product.id}-${product.selectedVariant}`}
              className={classes.card}
            >
              <img src={product?.imageUrl} alt={product?.name} />
              <div className={classes.details}>
                <h3>
                  {product?.name}
                  {product?.selectedVariant && `(${product.selectedVariant})`}
                </h3>
                <div className={classes.quantityControls}>
                  <div className={classes.btnStyles}>
                    <Button
                      onClick={() => handleDecrement(product?.id)}
                      disabled={(product?.quantityAdded || 0) <= 1}
                      variants={["secondary", "outline"]}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </Button>
                    <span>{product?.quantityAdded || 0}</span>
                    <Button
                      onClick={() => handleIncrement(product?.id)}
                      disabled={
                        (product?.quantityAdded || 0) >=
                        (product?.quantity || 0)
                      }
                      variants={["secondary", "outline"]}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </Button>
                  </div>
                  <p>
                    {product?.quantityAdded || 0} x $
                    {product?.pricePerUnit || 0}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() =>
                    handleRemoveProduct(product.id, product.selectedVariant)
                  }
                  style={{ width: "40%", marginTop: "2em", marginLeft: "10%" }}
                  variants={["danger"]}
                >
                  Remove
                </Button>
              </div>
            </article>
          ))}
        </section>

        {/* Right Section */}
        <aside className={classes.rightSection}>
          <h3>Order Summary</h3>
          <p>
            Total Products: <span>{totalProducts}</span>
          </p>
          <p>
            Total Amount: <span>${totalPrice.toFixed(2)}</span>
          </p>
          <Button type="button" onClick={handleCheckout} variants={["primary"]}>
            Checkout
          </Button>
        </aside>
      </main>
    </section>
  );
};

export default Cart;
