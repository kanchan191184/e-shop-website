import classes from "./ProductCard.module.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProductFavouriteStatus } from "../../services/product-services";

const ProductCard = ({ product = {}, refetchFavouriteProducts }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : ""
  );

  const [isFavourite, setIsFavourite] = useState(product.favourite);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    toast.success(`${product.name} (${selectedVariant}) added to cart!`, {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const handleMoreInfo = () => {
    navigate(`/productDetail/${product.id}`);
  };

  const onChange = (e) => {
    setSelectedVariant(e.target.value);
  };

  const handleFavouriteToggle = async () => {
    console.log(
      "handleFavouriteToggle called. Current isFavourite:",
      isFavourite
    );

    const newFavouriteStatus = !isFavourite;
    setIsFavourite(newFavouriteStatus);

    if (!product || !product.id) {
      return;
    }

    try {
      await updateProductFavouriteStatus(product.id, newFavouriteStatus);

      console.log(
        "Determining toast message. newFavouriteStatus:",
        newFavouriteStatus
      );
      const toastMessage = newFavouriteStatus
        ? `${product.name} added to favourites!`
        : `${product.name} removed from favourites.`;

      toast.success(toastMessage, { position: "top-center", autoClose: 1000 });

      if (!newFavouriteStatus && refetchFavouriteProducts) {
        refetchFavouriteProducts();
      }
    } catch (error) {
      console.log("Error updating favourite status:", error);
      setIsFavourite(isFavourite);
    }
  };

  return (
    <article className={classes.card}>
      <div className={classes.content}>
        <button
          className={classes.favourite}
          type="button"
          onClick={handleFavouriteToggle}
        >
          {isFavourite ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <div className={classes.variants}>
          <span>Color: </span>
          <select name="Variants" id="variants" onChange={onChange}>
            {product.variants.map((variant, index) => (
              <option key={index} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <h5> Price: ${product.pricePerUnit}</h5>
        <div>
          <Button type="button" onClick={handleMoreInfo} variants={["primary"]}>
            More Info
          </Button>
          <Button
            type="button"
            onClick={handleAddToCart}
            variants={["secondary"]}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
