import useQuery from "../../hooks/useQuery";
import classes from "./FavouritePage.module.scss";
import { getFavouriteProducts } from "../../services/product-services";
import ProductList from "../../components/ProductList/ProductList";

const FavouritePage = ({
  heading = "Favourite Products",
  hasMarginTop = true,
}) => {
  const {
    data: products,
    isFail,
    isLoading,
    error,
    reset,
  } = useQuery({ fetchFn: getFavouriteProducts, dependencies: [] });

  return (
    <main
      className={`${classes.productContainer} ${
        hasMarginTop ? classes.withMarginTop : ""
      }`}
    >
      <h1 className={classes.heading}>{heading}</h1>
      {isLoading && <p>Loading...</p>}
      {isFail && <p>{error.message}</p>}
      {products && products.length > 0 ? (
        <ProductList productData={products} refetchFavouriteProducts={reset} />
      ) : (
        !isLoading && <p>No products found</p>
      )}
    </main>
  );
};

export default FavouritePage;
