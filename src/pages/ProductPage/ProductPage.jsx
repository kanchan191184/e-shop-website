import useQuery from "../../hooks/useQuery";
import { getAllProducts } from "../../services/product-services";
import ProductSection from "../../components/ProductSection/ProductSection";

const ProductPage = ({ heading = "All Products", hasMarginTop = false }) => {
  const {
    data: products,
    isFail,
    isLoading,
    error,
  } = useQuery({ fetchFn: getAllProducts, dependencies: [] });

  return (
    <ProductSection
      heading={heading}
      hasMarginTop={hasMarginTop}
      isLoading={isLoading}
      isFail={isFail}
      error={error}
      products={products}
      fallbackMessage="No products found"
    />
  );
};

export default ProductPage;
