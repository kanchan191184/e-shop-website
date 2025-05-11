import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ProductDescription.module.scss";
import Button from "../Button/Button";

const ProductDescription = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : ""
  );

  const navigate = useNavigate();

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.value);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <article className={classes.card}>
      <div className={classes.flexContainer}>
        {/* Left: Image, name, variant, price, buttons */}
        <div className={classes.leftSection}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>

          {product.variants && (
            <div className={classes.variants}>
              <span>Color: </span>
              <select
                name="Variants"
                id="variants"
                value={selectedVariant}
                onChange={handleVariantChange}
              >
                {product.variants.map((variant, index) => (
                  <option key={index} value={variant}>
                    {variant}
                  </option>
                ))}
              </select>
            </div>
          )}

          <h5>Price: ${product.pricePerUnit}</h5>

          <div className={classes.buttonGroup}>
            <Button
              type="button"
              onClick={() => onAddToCart(selectedVariant)}
              variants={["secondary"]}
            >
              Add to cart
            </Button>
            <Button type="button" onClick={handleBack} variants={["primary"]}>
              Back
            </Button>
          </div>
        </div>

        {/* Right: Description */}
        {product.description && (
          <div className={classes.rightSection}>
            <h4>Description</h4>
            <p className={classes.description}>{product.description}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductDescription;
