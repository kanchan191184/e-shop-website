import { useNavigate } from "react-router-dom";
import classes from "./carouselBanner.module.scss";

const CarouselBanner = () => {
  const navigate = useNavigate();

  const handleBannerClick = (filter) => {
    navigate(`/featured-products/${filter}`);
  };
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide pointer-event"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            onClick={() => handleBannerClick("samsung")}
          >
            <img
              src="https://www.mobileciti.com.au/media/catalog/category/samsung-banner.jpg"
              className="d-block w-100"
              alt="Samsung Banner"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={classes.captionHeading}>
                Samsung Featured Phones
              </h5>
              <p className={classes.captionText}>
                Click to see the Samsung Featured Phones.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => handleBannerClick("iphone")}
          >
            <img
              src="https://bgr.com/wp-content/uploads/2024/09/apple-iphone-16-pro-max-plus-watch-10-ultra-airpods-4-launch-event-241.jpg?quality=82&strip=all&w=1020&h=350&crop=1"
              className="d-block w-100"
              alt="iPhone Banner"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={classes.captionHeading}>Apple Featured Phones</h5>
              <p className={classes.captionText}>
                Click to see the Apple Featured Phones.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => handleBannerClick("all")}
          >
            <img
              src="https://www.businessmobiles.com/wp-content/uploads/2025/03/Best-phones-2025-banner.webp.webp"
              className="d-block w-100"
              alt="Samsung and iPhone Banner"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={classes.captionHeading}>All Featured Phones</h5>
              <p className={classes.captionText}>
                Click to see the All Featured Phones.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselBanner;
