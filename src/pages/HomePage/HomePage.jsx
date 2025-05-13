import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import ProductPage from "../ProductPage/ProductPage";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={classes.homeContainer}>
      <CarouselBanner />
      <ProductPage heading="Latest Products" hasMarginTop={false} />
    </div>
  );
};

export default HomePage;
