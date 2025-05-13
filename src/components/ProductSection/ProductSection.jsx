import ProductList from "../ProductList/ProductList";
import classes from "./ProductSection.module.scss";

const ProductSection = ({
  heading,
  hasMarginTop = false,
  isLoading,
  isFail,
  error,
  products,
  fallbackMessage = "No products found",
}) => {
  return (
    <main
      className={`${classes.sectionContainer} ${
        hasMarginTop ? classes.withMarginTop : ""
      }`}
    >
      <h1 className={classes.heading}>{heading}</h1>

      {isLoading && <p>Loading...</p>}

      {isFail && (
        <p>
          Error: {error?.message || "An error occurred while fetching products"}
        </p>
      )}

      {!isLoading && !isFail && products && products.length > 0 ? (
        <ProductList productData={products} />
      ) : (
        !isLoading && <p>{fallbackMessage}</p>
      )}
    </main>
  );
};

export default ProductSection;
