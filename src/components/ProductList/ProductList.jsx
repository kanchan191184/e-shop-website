import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductList.module.scss";

const ProductList = ({ productData = [], refetchFavouriteProducts }) => {
  return (
    <section className={classes.container}>
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          refetchFavouriteProducts={refetchFavouriteProducts}
        />
      ))}
    </section>
  );
};

export default ProductList;
