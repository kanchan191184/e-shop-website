import useQuery from "../../hooks/useQuery";
import { getAllProducts } from "../../services/product-services";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./ProductPage.module.scss";

const ProductPage = ({ heading = "All Products", hasMarginTop = false }) => {
  // const { id } = useParams();

  const {
    data: products,
    isFail,
    isLoading,
    error,
  } = useQuery({ fetchFn: getAllProducts, dependencies: [] });

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
        <ProductList productData={products} />
      ) : (
        !isLoading && <p>No products found</p>
      )}
    </main>
  );
};

export default ProductPage;
