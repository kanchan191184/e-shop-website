import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { getFeaturedProducts } from "../../services/product-services";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./FeaturedPage.module.scss";

const FeaturedPage = ({ hasMarginTop = true }) => {
  const { brand } = useParams();

  const {
    data: products,
    isFail,
    isLoading,
    error,
  } = useQuery({
    fetchFn: () => getFeaturedProducts(brand !== "all" ? brand : null),
    dependencies: [brand],
  });

  const getHeading = () => {
    switch (brand) {
      case "samsung":
        return "Samsung Featured Products";
      case "iphone":
        return "iPhone Featured Products";
      default:
        return "All Featured Products";
    }
  };

  return (
    <main
      className={`${classes.featuredProductsContainer} ${
        hasMarginTop ? classes.withMarginTop : ""
      }`}
    >
      <h1 className={classes.heading}>{getHeading()}</h1>
      {isLoading && <p>Loading...</p>}
      {isFail && (
        <p>
          Error: {error?.message || "An error occurred while fetching products"}
        </p>
      )}
      {!isLoading && !isFail && products && products.length > 0 ? (
        <ProductList productData={products} />
      ) : (
        !isLoading && <p>No featured products found</p>
      )}
    </main>
  );
};

export default FeaturedPage;
