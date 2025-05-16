import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product, selectedVariant) => {
    // Check if the product already exists in the cart based on its ID

    // Access product.id directly from the incoming product object
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.id === product?.id && item.selectedVariant === selectedVariant
    );

    if (existingProductIndex > -1) {
      // If product exists, increment its quantityAdded
      setCart((prevCart) => {
        const newCart = [...prevCart];
        const existingItem = newCart[existingProductIndex];

        // Check if incrementing quantityAdded exceeds the max available quantity (item.quantity)
        // Access item.quantity directly from the existing item in the cart
        if (
          (existingItem?.quantityAdded || 0) + 1 <=
          (existingItem?.quantity || 0)
        ) {
          const updatedItem = {
            ...existingItem,
            quantityAdded: (existingItem.quantityAdded || 0) + 1, // Increment quantityAdded
          };
          newCart[existingProductIndex] = updatedItem;
        } else {
          console.log(
            "Product already in cart, but max quantity reached. Not incrementing."
          );
        }
        return newCart;
      });
    } else {
      // If product does not exist, add it with quantityAdded 1
      // Spread the properties of the incoming product object directly onto the new item
      // Ensure product has an ID and max quantity > 0 before adding
      if (product?.id && (product?.quantity || 0) > 0) {
        const newItem = {
          ...product,
          quantityAdded: 1,
          selectedVariant: selectedVariant,
        }; // Spread product properties and add quantityAdded
        setCart((prevCart) => [...prevCart, newItem]);
      } else {
        console.log(
          "Product cannot be added: missing ID or max quantity is 0",
          product
        );
      }
    }
  };

  // Function to remove a product from the cart (completely)
  const removeFromCart = (productId, selectedVariant) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === productId && item.selectedVariant === selectedVariant)
      )
    );
  };

  // Function to increment the quantityAdded of a product in the cart
  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        // Find the item to update by ID
        if (item.id === productId) {
          // Ensure quantityAdded does not exceed the max available quantity (item.quantity)
          const newQuantityAdded = (item.quantityAdded || 0) + 1; // Increment quantityAdded
          // Access item.quantity directly from the item in the cart
          if (newQuantityAdded <= (item?.quantity || 0)) {
            // Use item.quantity as the max limit
            const updatedItem = { ...item, quantityAdded: newQuantityAdded };
            return updatedItem;
          } else {
            console.log(
              `Cannot increment quantityAdded for ${productId}. Max quantity (${
                item?.quantity || 0
              }) reached.`
            );
          }
        }
        return item; // Return other items unchanged or the item if max quantity is reached
      });
    });
  };

  // Function to decrement the quantityAdded of a product in the cart
  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        // Find the item to update by ID
        if (item.id === productId) {
          // Decrement quantityAdded, ensure it doesn't go below 1
          const newQuantityAdded = (item.quantityAdded || 0) - 1; // Decrement quantityAdded
          const updatedItem = {
            ...item,
            quantityAdded: newQuantityAdded >= 1 ? newQuantityAdded : 1,
          }; // Keep quantityAdded at least 1
          return updatedItem;
        }
        return item; // Return other items unchanged
      });

      // Filter out items with quantityAdded 0 (or less, though we prevent less than 1 above)
      const filteredCart = newCart.filter(
        (item) => (item.quantityAdded || 0) >= 1
      );
      return filteredCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
