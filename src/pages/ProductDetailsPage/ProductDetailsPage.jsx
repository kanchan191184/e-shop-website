import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product-services";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import classes from "./ProductDetailsPage.module.scss";

const ProductDetailsPage = ({ hasMarginTop = true }) => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error loading product:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = (variant) => {
    addToCart(product, variant);
    toast.success(`${product.name} (${variant}) added to cart!`);
  };

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <main
      className={`${classes.featuredProductsContainer} ${
        hasMarginTop ? classes.withMarginTop : ""
      }`}
    >
      <h1 className={classes.heading}>Product Details</h1>
      <section className={classes.container}>
        <ProductDescription product={product} onAddToCart={handleAddToCart} />
      </section>
    </main>
  );
};

export default ProductDetailsPage;
