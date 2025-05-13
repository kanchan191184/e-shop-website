import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { getFeaturedProducts } from "../../services/product-services";
import ProductSection from "../../components/ProductSection/ProductSection";

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
    <ProductSection
      heading={getHeading()}
      hasMarginTop={hasMarginTop}
      isLoading={isLoading}
      isFail={isFail}
      error={error}
      products={products}
      fallbackMessage="No featured products found"
    />
  );
};

export default FeaturedPage;
